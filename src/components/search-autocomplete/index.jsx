import React, { useEffect, useState } from 'react';
import Dropdown from './dropdown';

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetchUsersList = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();
            data?.users?.length && setUsers(data.users.map((user) => user.firstName));
        } catch (error) {
            console.error(error);
            setErr(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsersList();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value.length > 1) {
            const filteredData = users?.length
                ? users.filter((user) => user.toLowerCase().includes(value.toLowerCase()))
                : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleClick = (e) => {
        const value = e.target.innerText;
        setSearch(value);
        setShowDropdown(false);
        setFilteredUsers([]);
    };

    return (
        <div className="wrapper p-5 bg-gradient-to-r from-green-500 to-orange-600 h-screen flex flex-col items-center">
            <h2 className="text-4xl text-white">Search Autocomplete Demo</h2>
            <div className="w-sm">
                <div className="mt-2">
                    <input
                        type="text"
                        name="search-users"
                        placeholder="Search Users here..."
                        className="outline-none border-violet-900 border-b-2 text-xl py-2 w-full"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
                {showDropdown && filteredUsers.length > 0 && (
                    <Dropdown userData={filteredUsers} show={setShowDropdown} click={handleClick} />
                )}
            </div>
        </div>
    );
};

export default SearchAutoComplete;
