import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("click htehete"+text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Enable to upper case","success")
    }

    const handleUpChange = (event) =>{
        //console.log('value .....')
        setText(event.target.value);
        
    }

    const handleClearClick = ()=>{
        let clr = ''
        setText(clr)
        props.showAlert("Cleared Text","success")
    }

    const handleLoClick = ()=>{
        let newtext2 = text.toLowerCase()
        setText(newtext2);
        props.showAlert("Enable to lower case","success")
    }

    const [text,setText] =useState("")

    const handleCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    const handleRemoveExtraSpace = () =>{
        let newTexts = text.split(/[ ]+/)
        setText(newTexts.join(" "))
        props.showAlert("Removed extra space","success")
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example Textarea</label>
                <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',
                color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summery</h1>
            <p>{text.split(" ").length} words, {text.length} Charactor</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
