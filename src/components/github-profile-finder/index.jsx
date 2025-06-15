import React, { useEffect, useState } from 'react';
import User from './user';

const GithubProfileFinder = () => {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleUserName = (e) => {
        const name = e.target.value;
        setUserName(name);
    };
    useEffect(() => {
        if (hasSearched && userName) fetchGithubUserData();
    }, []);
    const fetchGithubUserData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();
            console.log('data', data);
            setUserData(data);
        } catch (error) {
            console.error(error);
            setErr(error);
        } finally {
            setLoading(false);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSearched(true);
        fetchGithubUserData();
        setUserName('');
    };

    if (err) return <div className="text-2xl text-white">Data fetch failed!! Try again later...</div>;
    if (loading) return <div className="text-2xl text-white">Data fetching!! Please wait...</div>;

    return (
        <div
            className="wrapper p-5 bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex flex-col gap-8 items-center justify-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            <h2 className="text-4xl text-white">Github Profile Finder Demo</h2>
            <form className="flex gap-4">
                <input
                    type="text"
                    name="userName"
                    className="border-b-green-900 border-b-2 outline-none px-1 text-xl focus:bg-transparent"
                    placeholder="Enter Github UserName..."
                    value={userName}
                    onChange={handleUserName}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 px-6 py-3 outline-none rounded-xl text-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 active:scale-95"
                >
                    Search
                </button>
            </form>
            {hasSearched &&
                (userData?.login ? (
                    <User user={userData} />
                ) : (
                    <div className="text-2xl text-white">User Not Found!!</div>
                ))}
        </div>
    );
};

export default GithubProfileFinder;
