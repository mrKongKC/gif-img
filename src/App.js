// src/App.js
import { useEffect, useState } from 'react';
import GifList from './components/GifList';
import SavedGifList from './components/SavedGifList';
import Header from './components/layouts/Header';
import { fetchGIFs } from './services/api';
import "./css/App.css"

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [savedGifs, setSavedGifs] = useState([]);
  const [statusInventory, setStatusInventory] = useState(false);

  const defaultValue = "naruto"

  const handleSearch = async (searchTerm) => {
    const fetchedGifs = await fetchGIFs(searchTerm);
    setGifs(fetchedGifs);
  };

  const handleSaveGif = (gif) => {
    setSavedGifs((prevSavedGifs) => {
      const gifIds = new Set(prevSavedGifs.map(g => g.id));
      if (!gifIds.has(gif.id)) {
        return [...prevSavedGifs, gif];
      }
      return prevSavedGifs;
    });
  };

  const showInventory = (status) => {
    setStatusInventory(status)
  }

  useEffect(() => {
    handleSearch(defaultValue)
  }, [])

  return (
    <>
      <Header onSearch={handleSearch} total={savedGifs.length} inventory={showInventory}></Header>

      <div className='content'>
        <div className='content-img'>
          {!statusInventory ?
            <GifList gifs={gifs} onSave={handleSaveGif} /> :
            <SavedGifList gifs={savedGifs}  />
          }
        </div>

      </div>
    </>
  );
};

export default App;
