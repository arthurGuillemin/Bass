import React, { useState } from 'react';
import styles from './Aside.module.css'

const Aside = ({ onSelectSong, songs, onAddToPlaylist }) => {
  return (
    <div className={` aside fixed right-0 top-16 h-full  w-90 bg-white p-10 shadow-lg transition-width duration-300 drop-shadow-[0_0px_10px_rgba(236,60,76,1)] rounded-l-lg`}>
        <>
          <h2 className="text-orange-500 text-center font-bold text-4xl mb-4">Musiques</h2>
          <ul className="space-y-4">
            {songs.map((song, index) => (
              <li key={index} className="flex items-center space-x-2 text-black font-semibold " >
              <span className={`font-bold text-3xl mr-5 cursor-pointer ${styles.asideStroke}`} onClick={() => onAddToPlaylist(song)}>+</span>
              <span className={`text-xl hover:text-orange-500 cursor-pointer ${styles.asideStroke}`} onClick={() => onSelectSong(song)}>{song.title}</span>
              </li>
            ))}
          </ul>
        </>
    </div>
  );
};

export default Aside;