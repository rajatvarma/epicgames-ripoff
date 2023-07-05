import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { popup } from '../animation'

const Game = ({game}) => {
    const stringPathID = game.id.toString()

    return (
        <StyledGame 
            key={game.id} 
            layoutId={stringPathID}
            variants={popup}
            initial='init'
            animate='final'>
            <Link to={`/game/${game.id}`} >
                <motion.img src={game.background_image} alt="" layoutId={`image ${stringPathID}`}/>
                <motion.h3 layoutId={`title ${stringPathID}`}>{game.name}</motion.h3>
                <div className='bottom'>
                    <p>{game.released}</p>
                </div>
            </Link>
        </StyledGame>
    )
}


const StyledGame = styled(motion.div)`
    /*min-height: 30vh;*/
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    h3 {
        color: #F3F3F3;
        font-size: 1rem;
        padding: 0.5rem 0 0.25rem 0.5rem;
    }

    p {
        font-size: 0.9rem;
        color: #929A9A;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        align-items: center;
    }

    button {
        border: none;
        background: #121212;
        color: white;
        padding: 0.3rem;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            background: transparent;
        }

    }

    .button {
        background: linear-gradient(to bottom right, pink, salmon);
        padding: 2px;
        border-radius: 0.2rem;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
        filter: brightness(80%);

        &:hover {
            filter: brightness(100%);
        }
    }

    &:hover {
        box-shadow: 0px 5px 10px rgba(150,150,150,0.1);
        transform: scale(1.05, 1.05);
        transition: all 0.2s ease;
        cursor: pointer;
    }
`

export default Game
