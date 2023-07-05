const initState = {
    popular: [],
    newGames: [],
    upcomingGames: [],
    search: [],
    sellers: [],
}


const GameReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {...state, 
                popular: action.payload.popular,
                upcomingGames: action.payload.upcoming,
                newGames: action.payload.new,
                stores: action.payload.stores
            };
        
        case 'SEARCH_GAMES':
            return {
                ...state, search: action.payload.search
            }
        
        case 'CLEAR_SEARCH':
            return {
                ...state, search : []
            }

        default:
            return {...state};
    }
}

// const fetchGames = () => {
//     return {
//         type: "FETCH_GAMES",
//         payload: null
//     }
// }

export default GameReducer