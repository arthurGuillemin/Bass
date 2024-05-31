// components/Playlist.js
import React from 'react';
import styles from './Aside.module.css'

const Playlist = ({ playlist, onRemoveFromPlaylist }) => {
    return (
    <div className="bg-white shadow-lg drop-shadow-[0_0px_10px_rgba(236,60,76,1)] rounded-lg p-4 fixed top-1/4 left-10 w-64">
        <h2 className="text-orange-500 text-center font-bold text-lg mb-4">Playlist</h2>
        <ul className="space-y-2">
        {playlist.map((song, index) => (
            <li key={index} className="flex justify-between items-center text-black font-semibold">
            {song.title}
            <button
                onClick={() => onRemoveFromPlaylist(index)}
                className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
            >
                -
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default Playlist;