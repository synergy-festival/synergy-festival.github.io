import styled  from 'styled-components'
import Header  from '../mobile/header'
import Title   from '../mobile/title' 
import Cover   from '../mobile/cover'
import Logo    from '../mobile/logo'
import Slogan  from '../mobile/slogan'
import Icon    from '../mobile/icon'
import Subscribe from '../mobile/subscribe'

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const DivBottom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


function  Main() {

    return (
        <>  
            <Cover />
            <Logo />
            <Div>
                <Header/>
                <Title/>
                <DivBottom>
                    <Subscribe/>
                    <Icon/>
                    <Slogan/>
                </DivBottom>
            </Div>
        </>
    )
}


export default Main;