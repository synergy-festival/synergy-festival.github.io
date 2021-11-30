import { useState } from 'react'
import { rgba } from 'polished'
import styled from 'styled-components'
import arrow from '../../assests/img/arrow-white.svg'
import addNewEmail from '../../firebase/subscribe'


const Div = styled.div`
    height: auto;
    color: #AE69FF;
    z-index: 0;
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
    justify-content: center;  
`

const Input = styled.input`
    color: #AE69FF;
    font-size: 2rem;
    font-family: inherit;
    background-color: transparent;
    border-radius: 0;
    border: none;
    border-bottom: .1rem solid #AE69FF;
    width: 70%;

    &::-webkit-input-placeholder {
        color: ${rgba('#AE69FF', 0.6)};
        font-size: 3vw;
    }
    
    &:focus{
        outline: none;
    }

    &[type="email"]
    {
        font-size: 3vw;
        color: #AE69FF;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        -webkit-text-fill-color: #AE69FF !important;
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

    const [inputValue, setInputValue] = useState("");


    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    const saveAanswer = (event) => {
        event.preventDefault();
        addNewEmail(event.target.email.value, 'mobile')
        setInputValue('');
    }

    return (
        <Div>
            <Text>
                <Span>&#9679;</Span>
                Send email to subscribe
            </Text>
            <Form onSubmit={saveAanswer} className="subscribe_form" id="subscribe_form">
                <Group>
                    <Input value={inputValue} onChange={handleUserInput} placeholder='ex: abc123@gmail.com' type='email' id="email" required></Input>
                    <Button form="subscribe_form" value="Submit">
                        <Img src={arrow} />
                    </Button>
                </Group>
            </Form>
        </Div>
    )
}


export default Subscribe;