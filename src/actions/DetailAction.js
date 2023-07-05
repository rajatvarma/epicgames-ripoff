import axios from 'axios'
import {gameDetailsURL, gameScreenshotsURL, gameSellersURL} from '../api'

const LoadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING"
    })
    const GameData = await axios.get(gameDetailsURL(id))
    const GameScreenshots = await axios.get(gameScreenshotsURL(id))
    const SellerData = await axios.get(gameSellersURL(id))
    console.log(gameSellersURL(id))
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: GameData.data,
            screen: GameScreenshots.data.results,
            seller: SellerData.data.results
        }
    })
}

export default LoadDetail

