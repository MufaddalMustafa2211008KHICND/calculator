import { useState } from "react"
import ButtonContainer from "./ButtonContainer"
import Display from "./Display"

const Calculator = () => {
    
    const [buttonState, setButtonState] = useState('');
    // const [display, setDisplay ] = useState('');

    return(
        <div className="calculator">
            <Display display={buttonState}/>
            <ButtonContainer setButtonState={setButtonState} buttonState={buttonState} />
        </div>
    )
}

export default Calculator