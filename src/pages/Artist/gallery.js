import styled         from 'styled-components'
import { rgba }       from 'polished'
import Intro          from './intro'
import { getArtists } from '../../data'


const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 1rem;
        border: none
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${rgba('#AE69FF', 0.6)}
    }
    
`

function Gallery() {
    const artists = getArtists()
    return (
        <Div>
            {
                artists['data'].map((props, index) => {
                    return (
                        <Intro key={index} {...props} />
                    )
                })
            }
        </Div>
    )
}

export default Gallery;