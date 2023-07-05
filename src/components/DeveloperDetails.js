import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import styled from "styled-components"

const DeveloperDetails = ({id}) => {
    console.log(typeof id)
    const devs = useSelector((state) => state.developers.developers)
    const developer = devs.filter((develop) => {
        return `${develop.id}` === id
    })[0]
    console.log(developer)

    return(
        <CardShadow className='shadow'>
            <Detail>
                <h1>{developer.name}</h1>
                <img src={developer.image_background} alt="" />
                <p>Number of Games from Developer: {developer.games_count}</p>
                <h3>Some games...</h3>
                {
                    developer.games.map((game) => (
                      <div>
                          <h4>{game.name}</h4>
                      </div>  
                    ))
                }
            </Detail>
        </CardShadow>
    )

}

export default DeveloperDetails


const CardShadow = styled(motion.div)`
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    background: rgba(100, 100, 100, 0.7);
    position: fixed;
    top: 0;
    left: 0;
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