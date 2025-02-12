import React, { useEffect, useState } from 'react';
import NetworkItem from './NetworkItem';
import iptvLinks from '../assets/data/iptv-links.json';

const NetworkList = () => {
    const [networks, setNetworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNetworks = async () => {
            const networkData = await Promise.all(
                Object.entries(iptvLinks).map(async ([country, url]) => {
                    const response = await fetch(url);
                    const data = await response.text();
                    return { country, channels: parseM3U(data) };
                })
            );
            setNetworks(networkData);
            setLoading(false);
        };

        fetchNetworks();
    }, []);

    const parseM3U = (data) => {
        const lines = data.split('\n');
        const channels = [];
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('#EXTINF:')) {
                const channelInfo = lines[i].split(',');
                const channelName = channelInfo[1];
                const channelUrl = lines[i + 1];
                channels.push({ name: channelName, url: channelUrl });
            }
        }
        return channels;
    };

    if (loading) {
        return <div>Loading networks...</div>;
    }

    return (
        <div className="network-list">
            {networks.map(({ country, channels }) => (
                <div key={country}>
                    <h2>{country}</h2>
                    <div className="network-items">
                        {channels.map((channel) => (
                            <NetworkItem key={channel.url} channel={channel} country={country} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NetworkList;