import { motion } from "framer-motion";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import {getDevelopers} from "../actions/DevelopersAction";
import Developer from "../components/Developer";
import DeveloperDetails from "../components/DeveloperDetails";
import Search from "../components/Search";

const Developers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDevelopers());
    }, [dispatch])

    const location = useLocation()
    const pathID = location.pathname.split("/")[2]
    const devs = useSelector((state) => state.developers.developers)
    const {search} = useSelector((state) => state.games)

    return(
        <DevList>
            {
                search.length ? (
                    <Search/>
                ) : <></>
            }
            <h1>Developers</h1>
            {pathID && <DeveloperDetails id = {pathID}/>}
            <Devs>
                {
                    devs.map((dev) => (
                        <Developer developer = {dev} id = {dev.id} key={dev.id}/>
                    ))
                }
            </Devs>
        </DevList>
    )
}

const DevList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`

const Devs = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
`

export default Developers