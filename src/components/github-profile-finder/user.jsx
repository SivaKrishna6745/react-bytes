import React from 'react';

const User = ({ user }) => {
    const { avatar_url, name, bio, followers, following, public_repos, url } = user;
    return (
        <div className="flex gap-20 max-w-6xl p-8 mx-auto mt-10 items-start rounded-2xl shadow-xl bg-white/20">
            <img src={avatar_url} alt="avatar image" height={200} width={200} className="rounded-2xl" />
            <div className="flex flex-col gap-4 max-w-md">
                <div className="flex items-start gap-4">
                    <span className="text-xl text-gray-800 font-semibold">Name: </span>
                    <h3 className="text-xl">{name}</h3>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-xl text-gray-800 font-semibold">Bio: </span>
                    <h3 className="text-xl">{bio}</h3>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-xl text-gray-800 font-semibold">Followers: </span>
                    <h3 className="text-xl">{followers}</h3>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-xl text-gray-800 font-semibold">Following: </span>
                    <h3 className="text-xl">{following}</h3>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-xl text-gray-800 font-semibold">Public Repos: </span>
                    <h3 className="text-xl">{public_repos}</h3>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-xl text-gray-800 font-semibold">Link: </span>
                    <a href={url} className="underline text-xl">
                        Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default User;
