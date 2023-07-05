import React, { useEffect } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {ReactComponent as PS} from '../img/playstation-6.svg'
import {ReactComponent as Xbox} from '../img/xbox.svg'
import {ReactComponent as Nintendo} from '../img/nintendo.svg'
import {ReactComponent as Steam} from '../img/steam-1.svg'
import {ReactComponent as Apple} from '../img/apple.svg'
import {ReactComponent as Gamepad} from '../img/gamepad.svg'
import {ReactComponent as Android} from '../img/android-3.svg'
import starFull from '../img/star-full.png'
import starEmpty from '../img/star-empty.png'
import {popup, fadeIn, Loader} from '../animation'
import LoadDetail from '../actions/DetailAction';


const GameDetail = ({pathID}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LoadDetail(Number(pathID)))
    }, [pathID, dispatch])

    const history = useHistory()
    const ExitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains('shadow')) {
            history.push('/')
        }
    }

    const getPlatformIcon = (platform) => {
        switch (platform) {
            case 'PlayStation':
                return (<PS/>);
            case 'Xbox':
                return (<Xbox fill="blue"/>);
            case 'PC':
                return (<Steam/>);
            case 'Nintendo':
                return (<Nintendo/>);
            case 'Apple Macintosh':
                return (<Apple/>)
            case 'iOS':
                return (<Apple/>)
            case 'Android':
                return (<Android/>)
            default:
                return (<Gamepad/>);
        }
    }

    const ratingStarHandler = (rating) => {
      const stars = []
      const ratingFloor = Math.floor(rating);
      for (var i = 0; i < 5; i++) {
        if (i <= ratingFloor) {
          stars.push(<img src={starFull} key={i} alt=''/>)
        }
        else {
          stars.push(<img src={starEmpty} key={i} alt=''/>)
        }
      }
      return stars
    }

    const {stores} = useSelector((state) => state.games)
    const {screen, game, isLoading, sellers} = useSelector((state) => state.gameDetails)

    var thisGameStores = (seller)  => {
        for (let index = 0; index < stores.length; index++) {
            const element = stores[index];
            if (seller.store_id === element.id) {
                console.log({...seller, name: element.name})
                return {...seller, name: element.name}
            }
            
        }
    }


    return (
        <CardShadow className="shadow" onClick={ExitDetailHandler}>
            <Detail layoutId={pathID}>
            {!isLoading ? (
                <>
                <Stats>
                    <Title>
                        <motion.h1 
                        variants={fadeIn} 
                        initial='init' 
                        animate='final'>
                            {game.name}
                        </motion.h1>
                            <motion.img src={game.background_image} alt="" variants={popup} initial='init' animate='final'/>
                    </Title>
                    <Info>
                        <Platforms>
                            <h3>Publishers</h3>
                            {game.publishers.map(publisher => (
                                <p key={publisher.id}>{publisher.name}</p>
                            ))}
                        </Platforms>
                        <Platforms>
                            <h3>Developers</h3>
                            {game.developers.map(data => (
                                <p key={data.id}>{data.name}</p>
                            ))}
                        </Platforms>
                        <Platforms>
                            <h3>Release Date</h3>
                            <p>{game.released}</p>
                        </Platforms>
                        <Platforms>
                            <h3>Platforms</h3>
                            {game.parent_platforms.map(data => (
                                <div key={data.platform.id}>{getPlatformIcon(data.platform.name)}</div>
                            ))}
                        </Platforms>
                        <Platforms>
                            <h3>Genre</h3>
                            {game.genres.map(data => (
                                <p key={data.id}>{data.name}</p>
                            ))}
                        </Platforms>
                        <Platforms>
                            <h3>Get The Game</h3>
                            {
                            sellers.map(data => (
                                <p key={data.id}>
                                    <a href={thisGameStores(data).url} target='blank'>{thisGameStores(data).name}</a>
                                </p>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <hr width='70%' size='1px' color='grey'/>
                <DescMediaWrapper>
                    <Description>
                        <div dangerouslySetInnerHTML={{__html: game.description}} />
                    </Description>
                    <div className="follow">

                    </div>
                    <Gallery>
                        {screen.map(screen => (
                            <img src={screen.image} alt="" key={screen.id}/>
                        ))}
                    </Gallery>
                </DescMediaWrapper>
                <Requirements>
                  <h2>Requirements</h2>
                  {
                    game.platforms.map((platform) => (
                      <>{platform.requirements.minimum && (<div key={game.id}>
                        <h3>{platform.platform.name}</h3>
                        <h4>{platform.requirements.minimum}</h4>
                        <h4>{platform.requirements.recommended}</h4>
                      </div>)}</>
                    ))
                  }
                </Requirements>
                <Ratings>
                    <h2>Ratings</h2>
                    <h4>Average Rating</h4>
                    {ratingStarHandler(game.rating)}
                    <br/>
                    <h4>User Feelings</h4>
                    {game.ratings.map(data => (
                        <div key={data.id}>
                            <p>{data.title}</p>
                            <div className="rating-bar">
                                <div className="rating" style={{width: `${data.percent}%`}}></div>
                            </div>
                        </div>
                    ))}
                </Ratings></>) : <Loader />}
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    background: rgba(100, 100, 100, 0.7);
    position: fixed;
    top: 0;
    left: 0;
`

const DescMediaWrapper = styled(motion.div)`

`

const Detail = styled(motion.div)`
    margin: 1rem;
    height: 90vh;
    width: 90%;
    /*border-radius: 1rem;*/
    padding: 1rem 5rem;
    z-index: 2;
    position: absolute;
    left: 5%;
    background-color: #121212;
    overflow-y: scroll;
    color: #efefef;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color:#3ce4f0;
    }

    img {
        width: 100%;
    }

`

const Stats = styled(motion.div)`
    padding: 1rem;
`

const Info = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
`

const Title = styled(motion.div)`
    padding: 1rem;
    width: 100%;

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    h1 {
        padding: 1rem 0;
        font-size: 2rem;
    }
`

const Platforms = styled(motion.div)`
    padding: 1rem;
    border-left: 1px solid grey;

    h3 {
        font-size: 1rem;
        padding: 0.25rem 0;
    }

    p {
        font-size: 0.75rem;
        display: inline-block;
        padding-right: 0.5rem;
        color: #CCC;
    }

    a {
        color: #fff;
    }


    div {
        display: inline-block;
    }

    svg {
        width: 25px;
        height: 25px;
        margin-right: 1rem;
        margin-top: 0.2rem;
    }

    path {
        fill: #3ce4f0;
    }
`

const Description = styled(motion.div)`
    padding: 1rem 0;

    h1, h2, h3, h4 {
        padding: 1rem 0;
    }

`

const Ratings = styled(motion.div)`
    padding: 1rem 0;

    img {
      width: 1rem;
      margin: 5px;
    }

    p {
        font-size: 0.8rem;
        font-weight: lighter;
        text-transform: capitalize;
    }

    .rating-bar {
        background-color: #333;
        height: 10px;
        width: 60%;
    }
    .rating {
        height: 100%;
        background-color: #3ce4f0;
        box-shadow: 0 2px 10px #3ce4f0;
    }
`
const Requirements = styled(motion.div)`
  h4 {
    padding: 0 1rem;
  }
`

const Gallery = styled(motion.div)`
    margin: 1rem 0;

    img {
        width: 50vw;
        padding: 0.5rem 0;
    }
`

export default GameDetail
