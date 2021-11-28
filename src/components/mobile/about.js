import styled  from 'styled-components'
import Header  from '../mobile/header'
import Logo    from '../mobile/logo'
import Slogan  from '../mobile/slogan'
import Content from '../mobile/content'

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;



function  About() {
    return (
        <>  
            <Logo/>
            <Div>
                <Header page='about' />
                <Content/>
                <Slogan/>
            </Div>
        </>
    )
}


export default About;