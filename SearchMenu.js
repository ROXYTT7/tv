import React, { useState } from 'react';

const SearchMenu = ({ networks, setFilteredNetworks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = networks.filter(network => 
            network.name.toLowerCase().includes(term)
        );
        setFilteredNetworks(filtered);
    };

    return (
        <div className="search-menu">
            <input 
                type="text" 
                placeholder="Search for networks..." 
                value={searchTerm} 
                onChange={handleSearch} 
            />
        </div>
    );
};

export default SearchMenu;