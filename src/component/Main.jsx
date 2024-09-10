import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import PageName from './PageName';
import SearchBar from './SearchBar';
import ListTitels from './ListTitles';
import ListCoins from './ListCoins';

export default function Main() {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'coinranking3722e60bccfe7a0e05204a97c12262418b50c5f2065808f9',
        },
    };

    const [crypto, setCrypto] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [showCoin, setShowCoin] = useState('');

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.coinranking.com/v2/coins', options)
            .then((response) => response.json())
            .then((result) => {
                setCrypto(result.data.coins);
                setLoading(false);
            })
            .catch(() => setError(true));
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites]);

    const filteredCoins = (type) => {
        let filtered = crypto;
        switch (type) {
            case "Ascending":
                filtered = crypto.filter(coin => coin.change > 0);
                break;
            case "Descending":
                filtered = crypto.filter(coin => coin.change < 0);
                break;
            case "Favorites":
                return crypto.filter(coin => favorites.includes(coin.uuid));
            default:
                break;
        }
        return filtered.filter(coin =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const toggleFavorite = (coin) => {
        if (favorites.includes(coin.uuid)) {
            setFavorites(favorites.filter(fav => fav !== coin.uuid));
        } else {
            setFavorites([...favorites, coin.uuid]);
        }

    };

    return (
        <div className="cryptocurrency">
            <PageName />
            <SearchBar setSearchTerm={setSearchTerm} />
            <ListTitels setShowCoin={setShowCoin} showCoin={showCoin} />
            {error ? (
                <div className='error-message'>failed; Please check your internet :)</div>
            ) : loading ? (
                <ReactLoading className='loading' width="100%" type='spin' />
            ) : (
                <ListCoins crypto={filteredCoins(showCoin)} toggleFavorite={toggleFavorite} favorites={favorites} />
            )}
        </div>
    );
}