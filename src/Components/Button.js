const Button = ({ text, className , setButtonState, buttonState, equalTo, setEqualTo}) => {
    
    const handleClick = () => {
        let my;
        let last;
        try{
            my = buttonState.split('')
            last = my.pop()
        }
        catch{
            console.log('Error')
        }

        if(text === 'C') {
            setButtonState('')
        }
        else if(text === 'del'){
            setButtonState(my.join(''))
        }
        else if(text === '='){
            if(!(last ==='+'||last ==='*'||last ==='/'||last ==='-')){
                try{
                    const bla = eval(buttonState).toString()
                    setButtonState(bla)
                    setEqualTo(prev => !prev)
                }
                catch{
                    console.log('Error')
                }
            }
        }
        else if(buttonState === '' && !(text ==='+'||text ==='*'||text ==='/'||text ==='-')) {
            setButtonState(prev => prev+text);
        }
        else if(buttonState !== '' && (text ==='+'||text ==='*'||text ==='/'||text ==='-')) {
            if(equalTo){
                if(!(text ==='+'||text ==='*'||text ==='/'||text ==='-')){
                    setButtonState(text)
                    setEqualTo(prev => !prev)
                }
            }
            else {
                if(last ==='+'||last ==='*'||last ==='/'||last ==='-'){
                    setButtonState(my.join('')+text)
                }
                else {
                    setButtonState(buttonState+text)
                }
            }
        }
        else if(buttonState !== '' ) {
            if(equalTo) {
                setButtonState(text)
                setEqualTo(!equalTo)
            }
            else
                setButtonState(prev => prev+text);
        }
    }

    
    return(
        <button onClick={() => handleClick()} className={className ? 'btn equalsto': 'btn'} >{text}</button>
    )
}

export default Button