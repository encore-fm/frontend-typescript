import React from 'react';
import './App.css';
import Playlist from './components/Playlist'

const playlist: Song[] = [
    {
        id: "123",
        name: "song name",
        artists: ["omar, anton"],
        suggestedBy: "anton",
        album: "rick roll",
        imageURL: "https://s.yimg.com/ny/api/res/1.2/M142gEoUDb8sPr_LZCGNpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxMw--/https://s.yimg.com/uu/api/res/1.2/_fPK2Z4nDW.dPiYeimLx8w--~B/aD00MDA7dz02MjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/thewrap.com/e3a98e6aea832ab72f5a406c2faaa419"
    },
    {
        id: "321",
        name: "name of song",
        artists: ["anton, omar"],
        suggestedBy: "omar",
        album: "roll rick",
        imageURL: "https://static.giga.de/wp-content/uploads/2016/02/whenever-you-need-somebody-rcm797x0.jpg"
    }
];

function App() {
  return (
    <div className="App">
      <Playlist
        playlist={playlist}
      />
    </div>
  );
}

export default App;
