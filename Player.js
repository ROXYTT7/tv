import React, { useState, useEffect } from 'react';

const Player = ({ streamUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoRef, setVideoRef] = useState(null);

    useEffect(() => {
        if (videoRef) {
            isPlaying ? videoRef.play() : videoRef.pause();
        }
    }, [isPlaying, videoRef]);

    return (
        <div className="player-container">
            <video
                ref={setVideoRef}
                controls
                width="100%"
                style={{ borderRadius: '8px' }}
            >
                <source src={streamUrl} type="application/x-mpegURL" />
                Your browser does not support the video tag.
            </video>
            <div className="player-controls">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

export default Player;