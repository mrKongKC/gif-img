import React from 'react';
import { useState } from 'react';
import '../css/GifList.css'; // Import the CSS file

const SavedGifList = ({ gifs }) => {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? gifs : gifs.slice(0, 10);

    return (
        <>
            {
                itemsToShow.length === 0 ?

                    <div className='no-data'><h1>There is no data</h1></div>
                    : <>  <div className="gif-grid">
                        {itemsToShow.map((gif, index) => (
                            <button key={gif.id} className='gif-item-content-btn'
                            >
                                <div className="gif-item"  >
                                    <img
                                        className="gif-image"
                                        src={gif.images.fixed_height.url}
                                        alt={gif.title}
                                    />
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

export default SavedGifList;
