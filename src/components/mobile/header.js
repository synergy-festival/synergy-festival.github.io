import styled   from 'styled-components'
import Switcher from '../mobile/switcher'
import Nav      from '../mobile/nav'

const Div = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    padding: 4% 2%;
`;


function Header(props) {
    const { page } = props
    return(
        <>
            {(() => {
                switch (page) {
                case 'main' :  return (<Div><Switcher/><Nav page={page}/></Div>)
                case 'about':  return (<><Nav page={page}/></>)
                default:       return (<><Switcher/><Nav page={page}/></>)
                }
            })()}
        </>
    )


}


export default Header;