import { useState } from "react"
import Button from "./Button"

const ButtonContainer = ({ setButtonState, buttonState }) => {

    const [equalTo, setEqualTo] = useState(false)

    return (
        <div className="button-container">
            <Button text={'C'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'del'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'%'} />
            <Button text={'/'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'7'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'8'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'9'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'*'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'4'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'5'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'6'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'-'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'1'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'2'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'3'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'+'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'0'} setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
            <Button text={'.'} />
            <Button text={'='} className='equalsto' setButtonState={setButtonState} buttonState={buttonState} equalTo={equalTo} setEqualTo={setEqualTo}/>
        </div>
    )
}

export default ButtonContainer