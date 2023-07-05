import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from '../actions/GamesAction'
import Game from '../components/Game';
import {GameList, Games} from '../components/Styles'
import GameDetail from '../components/GameDetail'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import {fadeIn, Loader} from '../animation'
import {Wave as Loading} from '../animation'
import Search from '../components/Search';


const Home = () => {
    const location = useLocation()
    const pathID = location.pathname.split("/")[2]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    const {popular, newGames, upcomingGames, search} = useSelector((state) => state.games)

    return (
        <motion.div variants={fadeIn} initial='init' animate='final'>
            <Loader />
            <GameList>
                <AnimateSharedLayout>
                <AnimatePresence>
                    {pathID && <GameDetail pathID = {pathID}/>}
                </AnimatePresence>
                {
                    search.length ? (
                        <Search />
                    ) : <></>
                }
                <h1>Upcoming Games</h1>
                <Games>
                    {upcomingGames.length ?
                    <>{upcomingGames.map((game) => (
                     <Game game={game} id={game.id} key={game.id}/>
                    ))}</> : <Loading/>}
                </Games>
                </AnimateSharedLayout>
            </GameList>
            <GameList>
                <h1>New Games</h1>
                <Games>
                {newGames.length ?
                    <>{newGames.map((game) => (
                     <Game game={game} id={game.id} key={game.id}/>
                    ))}</> : <Loading/>}
                </Games>
            </GameList>
            <GameList>
                <h1>Popular Games</h1>
                <Games>
                {popular.length ?
                    <>{popular.map((game) => (
                     <Game game={game} id={game.id} key={game.id}/>
                    ))}</> : <Loading/>}
                </Games>
            </GameList>
        </motion.div>
    )
}

export default Home