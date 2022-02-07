import styled from 'styled-components'
import Icons  from '../Media/icons' 
import Back   from '../Button/back'
import Next   from '../Button/next'
import Nav    from '../Navbar'



const Div = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`;


function DesktopHeader(props) {

    if (props.page == '/') {
        return (
            <>
                <Div>
                    <Icons/> 
                </Div>
                <Nav {...props}/> 
            </>

        )
    } else {
        return (
            <>
                <Div>
                    <Next page={props.page}/> 
                    <Back />
                </Div>
                <Nav {...props}/>            
            </>

        )
    }    
}


export default DesktopHeader;