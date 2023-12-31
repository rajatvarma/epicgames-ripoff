const initState = {
    game: {parent_platforms: [], publishers: [], ratings: [], developers: [], genres: []},
    screen: [], 
    sellers: [],
    isLoading: true
}

const detailReducer = (state=initState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {...state, 
                game: action.payload.game, 
                screen: action.payload.screen, 
                sellers: action.payload.seller,
                isLoading: false}
        case "LOADING":
            return {...state, isLoading: true}
        default:
            return {...state}
    }
}

export default detailReducer