import React from 'react';

const NetworkItem = ({ network }) => {
    const { name, logo, flag, url } = network;

    return (
        <div className="network-item">
            <img src={flag} alt={`${name} flag`} className="network-flag" />
            <img src={logo} alt={`${name} logo`} className="network-logo" />
            <a href={url} target="_blank" rel="noopener noreferrer" className="network-name">
                {name}
            </a>
        </div>
    );
};

export default NetworkItem;