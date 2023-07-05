import React, { useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'
import {useDispatch} from 'react-redux'
import { searchGames } from '../actions/GamesAction'
import { fadeIn } from '../animation'
import { Link } from 'react-router-dom'

const Nav = () => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState("")
    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(searchGames(textInput))
    }

    const clearSearch = () => {
        dispatch({type: 'CLEAR_SEARCH'})
        setTextInput('')
    }

    return(
        <StyledNav variants={fadeIn} initial='init' animate='final'>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="Logo" />
                <h1>Ignite</h1>
            </Logo>
            <div className="links">
            <Link to='/'>
                    <h3>Games</h3>
                </Link>
                <Link to='/developers'>
                    <h3>Developers</h3>
                </Link>
                    <h3>Coming Soon</h3>
                    <h3>Coming Soon</h3>
                    <h3>Coming Soon</h3>
            </div>
            <div className="search">
                <form>
                    <input type="text" name="" onChange={inputHandler} value={textInput} />
                    <button type='submit' onClick={submitSearch}>Search</button>
                </form>
            </div>
            
        </StyledNav>
    );
}

export default Nav

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;

    .links {
        display: flex;
        margin: 3rem 1rem;
        justify-content: space-around;
        
        h3 {
            color: white;
            padding: 0.5rem;
            border-bottom: 1px solid #FF7676;
            font-size: 1rem;
        }
    }

    .search {
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        padding: 0.5rem;
        border: none;
        &:focus {
            box-shadow: 0 0 15px #FFFFFF99;

        }
    }

    button {
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background-color: #FF7676;
        color: white;
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;


    img {
        background-color: #FF7676;
        margin-right: 10px;
        border-radius: 1rem;
        width: 4rem;
        height: 4rem;
        padding: 1rem;
    }
`