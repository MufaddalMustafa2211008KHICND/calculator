const Button = ({ text, className , setButtonState}) => {
    
    const handleClick = () => {

        if(text === 'C') {
            setButtonState('')
        }
        else if(text === '='){
            setButtonState(prev => eval(prev))
        }
        else {
            setButtonState(prev => prev+text)
        }
    }

    
    return(
        <button onClick={() => handleClick()} className={className ? 'btn equalsto': 'btn'} >{text}</button>
    )
}

export default Button