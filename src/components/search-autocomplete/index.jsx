import React from 'react';

const SearchAutoComplete = () => {
    return (
        <div className="wrapper p-5 bg-gradient-to-r from-green-500 to-orange-600 flex flex-col items-center">
            <h2 className="text-4xl text-white">Search Autocomplete Demo</h2>
            <div>
                <input type="text" name="search-users" placeholder="Search Users here..." />
            </div>
        </div>
    );
};

export default SearchAutoComplete;
