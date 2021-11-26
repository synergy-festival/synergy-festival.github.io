import styled   from 'styled-components'
import Switcher from '../mobile/switcher'
import Nav      from '../mobile/nav'

const Div = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    padding: 4% 1%;
`;


function Header() {
    return (
        <Div>
            <Switcher/>
            <Nav />
        </Div>
    )
}


export default Header;