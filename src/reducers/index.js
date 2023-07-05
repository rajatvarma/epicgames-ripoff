import GameReducer from "./GamesReducer";
import detailReducer from "./DetailReducer"
import {DevelopersReducer, DevelopersDetailsReducer} from './DevelopersReducer'
import {combineReducers} from "redux"

// const initState = {
//     name: "",
//     isLoggedIn: false
// }

// const UserReducer = (state = initState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }


const rootReducer = combineReducers({
    games: GameReducer,
    gameDetails: detailReducer,
    developers: DevelopersReducer,
    developerDetails: DevelopersDetailsReducer,
})

export default rootReducer