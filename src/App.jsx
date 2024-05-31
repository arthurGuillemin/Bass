import React, { useState } from 'react';
import Header from './components/header';
import Aside from './components/aside';
import MusicPlayerCard from './components/player';

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

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  const playNextSong = () => {
    const currentIndex = songs.findIndex(s => s.title === selectedSong.title);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSelectedSong(songs[nextIndex]);
  };

  const playPrevSong = () => {
    const currentIndex = songs.findIndex(s => s.title === selectedSong.title);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setSelectedSong(songs[prevIndex]);
  };

  return (
    <div className="App flex">
      <Header />
      <Aside onSelectSong={handleSelectSong} songs={songs} />
      <MusicPlayerCard songs={songs} song={selectedSong} onNext={playNextSong} onPrev={playPrevSong} />
    </div>
  );
}

export default App;
