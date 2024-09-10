import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function ListCoins({ crypto, toggleFavorite, favorites }) {

    const coins =crypto.map((item) => {
        const isFavorite = favorites.includes(item.uuid);
        
        return (
            <a >
            <li key={item.uuid} className="coin">
            <div className="section1">
                <p className="coin-number">{item.rank}</p>
                <img className="coin-logo" src={item.iconUrl} alt="logo" />
                <div className="coin-name">
                    <span className="coin-symbol">{item.symbol}</span>
                    <span className="coin-fullName">{item.name}</span>
                </div>
            </div>
            <div className={item.change>0 ? "green" : "red"}>$ {Math.round(item.price *100000) / 100000}
                <a className={isFavorite ? "icon-fav heart-red" : "icon-fav"} onClick={() => toggleFavorite(item)}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a>
            </div>
        </li>
            </a>
        )      
    })
    return (
        <ul className="coins">
            {coins}
        </ul>
    )
}






// {
//     "uuid": "razxDUgYGNAdQ",
//     "symbol": "ETH",
//     "name": "Ethereum",
//     "color": "#3C3C3D",
//     "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
//     "marketCap": "278318531506",
//     "price": "2279.3830821507236",
//     "listedAt": 1438905600,
//     "tier": 1,
//     "change": "0.40",
//     "rank": 2,
//     "sparkline": [
//         "2270.629259260739",
//         "2263.410552575437",
//         "2250.9440960915294",
//         "2259.8034466231816",
//         "2266.018381438374",
//         "2264.7077442737955",
//         "2263.54464983499",
//         "2270.1462644734074",
//         "2284.33693806762",
//         "2285.5575885146236",
//         "2286.1307738461946",
//         "2286.098075925799",
//         "2284.0020701745725",
//         "2281.0431377127916",
//         "2283.0389360495565",
//         "2276.8289279520427",
//         "2276.976609479479",
//         "2288.07122405721",
//         "2296.11867298153",
//         "2300.50698168703",
//         "2295.7794716456124",
//         "2292.8492610784274",
//         "2290.601405660458",
//         "2292.7212007542166"
//     ],
//     "lowVolume": false,
//     "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
//     "24hVolume": "11057197595",
//     "btcPrice": "0.04137831570615337",
//     "contractAddresses": []
// }