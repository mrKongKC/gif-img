// SavedGifList.js
"use client";

const SavedGifList = ({ savedGifs }) => {
    return (
        <div>
            <h2>Saved GIFs ({savedGifs.length})</h2>
            {savedGifs.map((gif) => (
                <div key={gif.id}>
                    <img src={gif.images.fixed_height.url} alt={gif.title} />
                </div>
            ))}
        </div>
    );
};

export default SavedGifList;
