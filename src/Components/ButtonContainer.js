import Button from "./Button"

const ButtonContainer = ({ setButtonState }) => {
    return (
        <div className="button-container">
            <Button text={'C'} setButtonState={setButtonState} />
            <Button text={'←'} />
            <Button text={'%'} />
            <Button text={'/'} setButtonState={setButtonState} />
            <Button text={'7'} setButtonState={setButtonState} />
            <Button text={'8'} setButtonState={setButtonState} />
            <Button text={'9'} setButtonState={setButtonState} />
            <Button text={'x'} setButtonState={setButtonState} />
            <Button text={'4'} setButtonState={setButtonState} />
            <Button text={'5'} setButtonState={setButtonState} />
            <Button text={'6'} setButtonState={setButtonState} />
            <Button text={'-'} setButtonState={setButtonState} />
            <Button text={'1'} setButtonState={setButtonState} />
            <Button text={'2'} setButtonState={setButtonState} />
            <Button text={'3'} setButtonState={setButtonState} />
            <Button text={'+'} setButtonState={setButtonState} />
            <Button text={'0'} setButtonState={setButtonState} />
            <Button text={'.'} />
            <Button text={'='} className='equalsto' setButtonState={setButtonState} />
        </div>
    )
}

export default ButtonContainer