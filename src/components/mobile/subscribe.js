import { rgba } from 'polished'
import styled from 'styled-components'
import arrow from '../../assests/img/arrow-white.svg'

const Div = styled.div`
    height: auto;
    color: #AE69FF;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    height: auto;
    width: auto;
    font-size: 3vw;
    flex-shrink: 0;
`

const Span = styled.span`
    width: auto;
    margin: 0 .2rem;
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
    justify-content:center;  
`

const Input = styled.input`
    color: #AE69FF;
    font-size: 2rem;
    font-family: inherit;
    background-color: transparent;
    border: none;
    border-bottom: .2rem solid #AE69FF;
    width: 70%;

    &::-webkit-input-placeholder {
        color: ${rgba('#AE69FF', 0.6)};
        font-size: 3vw;
    }
    
    &:focus {
        outline: none;
        box-shadow: 1 1rem 2rem ${rgba('#000000', 0.1)};
    }
    &[type="email"]
    {
        font-size: 3vw;
        color: #AE69FF;
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
    color: #AE69FF;
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
                    <Input placeholder='ex: abc123@gmail.com' type='email' id="email" required></Input>
                    <Button form="subscribe_form" value="Submit">
                        <Img src={arrow} />
                    </Button>
                </Group>
            </Form>
        </Div>
    )
}


export default Subscribe;