import { rgba } from 'polished'
import styled from 'styled-components'
import arrow from '../../assests/img/arrow-white.svg'

const Div = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 100%;
    color: #FFFFFF;
    align-self: flex-end;
`;

const Text = styled.div`
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    height: auto;
    width: auto;
    letter-spacing: .1rem;
    font-size: 3vw;
    flex-shrink: 0;
`

const Span = styled.span`
    width: auto;
    margin: 0 1rem;
`

const Form = styled.form`
    text-align: center;
    width: 100%;
    height: auto;
    margin: 1% 1%;
    font-size: 2rem;
`

const Group = styled.div`
    position: relative;
    width: 100%;
    display: flex;  
`

const Input = styled.input`
    color: inherit;
    font-size: 1.5rem;
    font-family: inherit;
    background-color: transparent;
    border: none;
    border-bottom: .2rem solid #FFFFFF;
    
    &:focus {
        outline: none;
        box-shadow: 1 1rem 2rem ${rgba('#000000', 0.1)};
    }
    &[type="email"]
    {
        font-size: 2vw;
        color: ${rgba('#FFFFFF', 0.8)}
    }
`

const Button = styled.button`
    font-size: 2rem;
    width: auto;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    right: 0;
    z-index: 100;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
`

const Img = styled.img`
    width: 5vh;
    height: auto
`

function Subscribe() {
    return (
        <Div>
            <Text>
                <Span>&#9679;</Span>
                Send email to subscribe
            </Text>
            <Form action='#' className="subscribe_form" id="subscribe_form">
                <Group>
                    <Input type='email' id="email" required></Input>
                    <Button form="subscribe_form" value="Submit">
                        <Img src={arrow} />
                    </Button>
                </Group>
            </Form>
        </Div>
    )
}


export default Subscribe;