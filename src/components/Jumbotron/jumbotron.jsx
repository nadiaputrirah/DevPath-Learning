import React from 'react';

export default function Jumbotron({ imageUrl }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="content">
                <h2 className="text-6xl font-extrabold text-white">Ideas</h2>
                <p className="text-lg text-white">Where all our great things begin</p>
            </div>
        </div>
    );
}
