import styled  from 'styled-components'
import Nav     from '../Navbar';

const Div = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    padding: 4% 2%;
`;


function MobileHeader({ page }) {
    if (page == '/') {
        return(
            <Div>
                <Nav page={page}/>
            </Div>
        )
    } else {
        return(
            <>
                <Nav page={page}/>
            </>
        )
    }


}


export default MobileHeader;