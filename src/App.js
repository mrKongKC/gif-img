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

  useEffect(() => {
    handleSearch(defaultValue)
  }, [])

  return (
    <>
      <Header onSearch={handleSearch} total={savedGifs.length}></Header>

      <div className='content'>
        <div className='content-img'>
          <GifList gifs={gifs} onSave={handleSaveGif} />
        </div>

      </div>
      {/* <Search onSearch={handleSearch} />
      <GifList gifs={gifs} onSave={handleSaveGif} />
      <SavedGifList savedGifs={savedGifs} /> */}
    </>
  );
};

export default App;
