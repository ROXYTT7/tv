import React, { useEffect, useState } from 'react';
import NetworkList from '../components/NetworkList';
import Player from '../components/Player';
import SearchMenu from '../components/SearchMenu';
import { fetchIPTVLinks } from '../utils/api';

const Home = () => {
    const [networks, setNetworks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const loadNetworks = async () => {
            const data = await fetchIPTVLinks();
            setNetworks(data);
        };
        loadNetworks();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredNetworks = networks.filter(network =>
        network.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home">
            <SearchMenu onSearch={handleSearch} />
            <Player />
            <NetworkList networks={filteredNetworks} />
        </div>
    );
};

export default Home;