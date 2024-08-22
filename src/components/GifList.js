import React from 'react';
import { useState } from 'react';
import '../css/GifList.css'; // Import the CSS file

const GifList = ({ gifs, onSave }) => {
    const [showAll, setShowAll] = useState(false);
    const [clickedGifId, setClickedGifId] = useState(null);

    const itemsToShow = showAll ? gifs : gifs.slice(0, 10);
    const handleSave = (gif, index) => {
        onSave(gif)
        setClickedGifId(index);
        setTimeout(() => {
            setClickedGifId(null);
        }, 500)

    }
    return (
        <>{
            itemsToShow.length === 0 ?
                <div className='no-data'><h1>There is no data</h1></div>
                : <>
                    <div className="gif-grid">
                        {itemsToShow.map((gif, index) => (
                            <button onClick={() => handleSave(gif, index)} key={gif.id} className={`gif-item-content-btn ${clickedGifId === index ? 'clicked' : ''}`}
                            >
                                <div className="gif-item"  >
                                    <img
                                        className="gif-image"
                                        src={gif.images.fixed_height.url}
                                        alt={gif.title}
                                    />
                                    <img className='hover-img' alt='hover-img' src='../img/heart-cover.svg' />
                                    <img className='hover-clicked' alt='hover-clicked' src='../img/heart-clicked.svg' />
                                </div>
                            </button>

                        ))}
                    </div>
                    <div className='see-more-container'>
                        {gifs.length > 10 && (
                            <p onClick={() => setShowAll(!showAll)} className="see-more">
                                {showAll ? 'hide' : 'See More'}
                            </p>
                        )}
                    </div>
                </>
        }
        </>
    );
};

export default GifList;