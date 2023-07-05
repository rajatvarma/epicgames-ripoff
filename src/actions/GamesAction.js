import axios from "axios"
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL, storesURL} from "../api"


export const loadGames = () => async (dispatch) => {
    const newGamesData = await axios.get(newGamesURL)
    const popularGamesData = await axios.get(popularGamesURL)
    const upcomingGamesData = await axios.get(upcomingGamesURL)
    const sellersData = await axios.get(storesURL)
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            new: newGamesData.data.results,
            stores: sellersData.data.results
        }
    })
}

export const searchGames = (game_name) => async (dispatch) => {
    const searchedGames = await axios.get(searchGameURL(game_name))    
    dispatch({
        type: 'SEARCH_GAMES',
        payload: {
            search: searchedGames.data.results
        }
    })
}