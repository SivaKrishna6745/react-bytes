import React, { useEffect, useState } from 'react';

const GithubProfileFinder = () => {
    const [userName, setUserName] = useState('sivakrishna6745');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleUserName = (e) => {
        const name = e.target.value;
        setUserName(name);
    };
    useEffect(() => {
        fetchGithubUserData();
    }, []);
    const fetchGithubUserData = async () => {
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
    const handleSubmit = () => {
        console.log('userName', userName);
    };

    if (err) return <div className="text-2xl text-white">Data fetch failed!! Try again later...</div>;
    if (loading) return <div className="text-2xl text-white">Data fetching!! Please wait...</div>;

    return (
        <div className="wrapper p-5 bg-orange-300 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-white">Github Profile Finder Demo</h2>
            <div className="mt-10 flex gap-4">
                <input
                    type="text"
                    name="userName"
                    className="border-b-green-900 border-b-2 outline-none px-1 text-xl"
                    placeholder="Enter Github UserName..."
                    value={userName}
                    onChange={handleUserName}
                />
                <button onClick={handleSubmit} className="bg-blue-500 px-6 py-3 rounded-xl text-xl cursor-pointer">
                    Search
                </button>
            </div>
        </div>
    );
};

export default GithubProfileFinder;
