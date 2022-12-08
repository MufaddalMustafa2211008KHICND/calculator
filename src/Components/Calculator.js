import { useState, useEffect } from "react"
import Button from "./Button"
import ButtonContainer from "./ButtonContainer"
import Display from "./Display"

const Calculator = () => {
    
    const [buttonState, setButtonState] = useState('');
    const [display, setDisplay ] = useState('');

    useEffect(() => {
        setDisplay(buttonState)
    }, [buttonState])

    return(
        <div className="calculator">
            <Display display={display}/>
            <ButtonContainer setButtonState={setButtonState} />
        </div>
    )
}

export default Calculator