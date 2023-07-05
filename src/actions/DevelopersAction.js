import axios from 'axios'
import { developersURL } from '../api'


export const getDevelopers = () => async(dispatch) => {
    const results = await(axios.get(developersURL))
    console.log(developersURL)
    dispatch({
        type: 'GET_DEVELOPERS',
        payload: {
            developers: results.data.results
        }
    })
}

export const getDevelopersDetails = () => async(dispatch) => {
    const results = 0
    console.log('hello')
    dispatch({
        type: 'GET_DEV_DETAILS',
        payload: {
            developer: results.data
        }
    })

}