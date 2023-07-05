const base_url_stores = `https://api.rawg.io/api/stores`
const base_url_games = `https://api.rawg.io/api/games`
const base_url_developers = `https://api.rawg.io/api/developers`
const api_key = `?key=${process.env.REACT_APP_API_KEY}`
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10){
        return `0${month}`
    }
    else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10){
        return `0${day}`
    }
    else {
        return day
    }
}

const getCurrentYear = new Date().getFullYear();
const currentDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDay()}`

export const popularGamesURL = base_url_games + api_key + `&dates=${currentDate}&ordering=-rating&page_size=10`
export const upcomingGamesURL = base_url_games + api_key + `&dates=${currentDate},${getCurrentYear+1}-${getCurrentMonth()}-${getCurrentDay()}&ordering=-added&page-size=10`
export const newGamesURL = base_url_games + api_key + `&dates=${getCurrentYear-1}-${getCurrentMonth()}-${getCurrentDay()},${currentDate}&ordering=-released&page-size=10`

export const gameDetailsURL = (id) => {return `${base_url_games}/${id}${api_key}`}
export const gameScreenshotsURL = (id) => {return `${base_url_games}/${id}/screenshots${api_key}`}
export const gameSellersURL = (id) => {return base_url_games + `/${id}/stores` + api_key}

export const searchGameURL = (name) => `${base_url_games}${api_key}&search=${name}&page_size=9`

export const developersURL = base_url_developers + api_key + '&page_size=50'

export const developersDetailURL = (id) => base_url_developers + `/${id}` + api_key

export const storesURL = base_url_stores + api_key