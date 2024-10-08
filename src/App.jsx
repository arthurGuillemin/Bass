import React, { useState } from 'react';
import Header from './components/header';
import Aside from './components/aside';
import MusicPlayerCard from './components/player';
import Playlist from './components/playlist';

const songs = [
  { title: 'Bad Bunny - DAKITI', file: "/src/songs/bad.mp3", img: "/src/assets/dakiti-cover.jpg" },
  { title: 'PLK - Un peu de haine', file: "/src/songs/plk.mp3", img: "/src/assets/plk-cover.jpg" },
  { title: 'Ninho - Mamacita', file: "/src/songs/ni.mp3", img: "/src/assets/ni-cover.jpg" },
  { title: 'Kaaris - Chargé', file: "/src/songs/chargé.mp3", img: "/src/assets/charge-cover.jpg" },
  { title: '24kGoldn - City of Angels', file: "/src/songs/24kgoldn.mp3", img: "/src/assets/24kgoldn-cover.jpg" },
  { title: 'Rever - Tentation', file: "/src/songs/tentation.mp3", img: "/src/assets/tentation-cover.jpg" },
  { title: 'Iniko - Jericho', file: "/src/songs/iniko.mp3", img: "/src/assets/iniko-cover.jpg" },
  { title: 'Carbone - Tout va changer', file: "/src/songs/tout_va_changer.mp3", img: "/src/assets/tout_va_changer-cover.jpg" },
  { title: 'Rever - Validé', file: "/src/songs/valide.mp3", img: "/src/assets/valide-cover.jpg" },
  { title: 'Kpoint - La Parisienne', file: "/src/songs/kpoint.mp3", img: "/src/assets/kpoint-cover.jpg" },
  { title: 'Carbone - Imagine', file: "/src/songs/imagine.mp3", img: "/src/assets/imagine-cover.jpg" },
  { title: '24kGoldn - A Lot to Lose', file: "/src/songs/a_lot_to_lose.mp3", img: "/src/assets/24kgoldn-cover.jpg" },
]; 

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };
  const handleAddToPlaylist = (song) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
    if (playlist.length === 0) {
      setSelectedSong(song);
    }
  };

  const playNextSong = () => {
    if (playlist.length > 0) {
      const currentIndex = playlist.findIndex(s => s.title === selectedSong.title);
      const nextIndex = (currentIndex + 1) % playlist.length;
      setSelectedSong(playlist[nextIndex]);
    }
  };

  const playPrevSong = () => {
    if (playlist.length > 0) {
      const currentIndex = playlist.findIndex(s => s.title === selectedSong.title);
      const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      setSelectedSong(playlist[prevIndex]);
    }
  };

  return (
    <div className="App flex">
      <Header />
      <Aside onSelectSong={handleSelectSong} songs={songs} onAddToPlaylist={handleAddToPlaylist} />
      <Playlist playlist={playlist} />
      <MusicPlayerCard songs={songs} song={selectedSong} onNext={playNextSong} onPrev={playPrevSong} />
    </div>
  );
}

export default App;
