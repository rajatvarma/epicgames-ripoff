import { useSelector } from "react-redux"
import Game from "./Game"
import {Games} from './Styles'

const Search = () => {

    const {search} = useSelector((state) => state.games)

    return (<div className="searched">
        <h1>Search Results</h1>
        <Games>
            {search.map((game) => (
            <Game game={game} id={game.id} key={game.id}/>
            ))}
        </Games>
    </div>)
}

export default Search