import { useState } from 'react';
import "../../css/Header.css"

const Header = ({ onSearch, total, inventory }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusInventory, setStatusInventory] = useState(false);

    const handleSetInventory = () => {
        setStatusInventory(!statusInventory)
        inventory(!statusInventory)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };
    return (
        <div className='header-layout'>
            <div className='header-content'>
                <div className='custom-w-80'>
                    <form onSubmit={handleSubmit} style={{ display: 'flex' }} className='w-100'>
                        <input
                            className='input-field w-80'
                            type="text"
                            placeholder="Search GIFs"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className='btn-search'>
                            <p>Search</p>
                            <img src='/img/search-icon.svg' alt='search-icon' width={12} />
                        </button>
                    </form>
                </div>
                <div className='custom-w-20 flex-center justify-center'>
                    <button className='save-title-btn' onClick={handleSetInventory}> {!statusInventory ? `Save (${total})` : 'Back'}</button>
                </div>

            </div>
        </div>
    );
};

export default Header;
