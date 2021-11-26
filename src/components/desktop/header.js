import styled   from 'styled-components'
import Switcher from '../desktop/switcher'
import Icon     from '../desktop/icon'
import Back     from '../desktop/back'
import Next     from '../desktop/next'

const Div = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
`;


function Header(props) {


    return (
        <Div>
            {(() => {
                switch (props.page) {
                case 'main' :  return (<><Switcher/> <Icon/></>)
                case 'about':  return (<><Back/> <Next/></>)
                default:       return (<><Switcher/> <Icon/></>)
                }
            })()}
        </Div>
    )
}


export default Header;