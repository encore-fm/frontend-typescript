import React from 'react';
import './App.css';
import Player from './components/Player'

const mockSong: Song = {
  id: '1',
  name: 'Song 1',
  artists: ['Artist 1'],
  duration: 10000,
  coverURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hip-hop-mixtape-album-cd-cover-art-spotify-design-template-455bc76af9d69ec2496d7a89251bb283_screen.jpg?ts=1600775143',
  albumName: 'Album 1',
  suggestedBy: 'User 1',
  score: 0,
  timeAdded: new Date(),
  upvoters: [],
  downvoters: [],
}

function App() {
  return (
    <div className="App">
      <Player
        isAdmin={true}
        currentSong={mockSong}
        isPlaying={true}
        progress={0}
        onPlay={() => {}}
        onPause={() => {}}
        onSkip={() => {}}
        onSeek={(val) => {console.log(val)}}
      />
    </div>
  );
}

export default App;
