import React, {useState} from 'react'


export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
}

const handleLowerClick=()=>{
    setText(text.toLowerCase());
}

const handleReverse=()=>{
    setText(text.split("").reverse().join(""));
}

const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
}

const clearText=()=>{
    setText("");
}



    const [text, setText] = useState('Enter text here');
    // setText(); correct way to change state
    return (
        <>
        <div className='container' style={{backgroundColor: props.mode === 'dark' ? ' rgb(3, 44, 108)':'white',color:props.mode ==='dark'?'white':'black'}} 
>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            {/* <label for="myBox">Example textarea</label> */}
            <textarea className="form-control " 
            value={text} 
            style={{backgroundColor: props.mode === 'dark' ? ' rgb(3, 44, 108)':'white',color:props.mode ==='dark'?'white':'black'}} 
            onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
            <button className='btn btn-success' style={{marginLeft:10}} onClick={handleLowerClick}>Convert To LowerCase</button>
            <button className='btn btn-warning' style={{marginLeft:10}} onClick={handleReverse}>Reverse Text</button>
            <button className='btn btn-danger' style={{marginLeft:10}} onClick={clearText} >Clear Text</button>
        </div>
        <div className='container my-2' style={{backgroundColor: props.mode === 'dark' ? ' rgb(3, 44, 108)':'white',color:props.mode ==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} letters.</p>
            <p>{0.008* text.split(" ").length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above."}</p>
        </div>
        </>
    )}
