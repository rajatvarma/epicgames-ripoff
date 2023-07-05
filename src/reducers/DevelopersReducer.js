const initDevelopersState = {
    developers: []
}

const initDevelopersDetailsState = {
    developer: [],
    isLoading: true

}

export const DevelopersReducer = (state=initDevelopersState, action) => {
    switch (action.type) {
        case 'GET_DEVELOPERS':
            return {
                ...state, developers: action.payload.developers
            }
        default:
            return state
    }
}

export const DevelopersDetailsReducer = (state=initDevelopersDetailsState, action) => {
    switch (action.type) {
        case 'GET_DEV_DETAILS':
            return {
                ...state, developer: action.payload, isLoading: false
            }
        
        case 'LOADING':
            return {
                ...state, isLoading: true
            }
        default:
            return state
    }
}