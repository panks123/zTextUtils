import React, {useState} from 'react'
// import fs from 'fs';

function capitalize(str)
{
    let arr = str.split(' ')
    let result = []
    for (let element of arr)
    {
        if(element[0]>='a' && element[0]<='z')
        {
            element = element.charAt(0).toUpperCase() + element.slice(1)
        }
        result.push(element)
    }
    return result.join(' ')
}

function removeExtraSpaces(str)
{
    let newText=str.trim() // Will remove the starting and ending extra spaces

    let arr = newText.split(' ')
    while(arr.indexOf('')>-1)
    {
        arr.splice(arr.indexOf(''), 1)
    }
    newText = arr.join(' ')
    return newText;
}

function wordsCount(str){
    let newStr = removeExtraSpaces(str)
    if(newStr.length === 0)
        return 0;
    return newStr.split(/\s+/).length
}

function updateBtn(btn){
    const afterText = {
        "btn1" : "Converted to Uppercase!",
        "btn2" : "Converted to Lowercase!",
        "btn3" : "Capitalized!",
        "btn4" : "Extra spaces removed!",
        "btn5" : "Copied to Clipboard!",
        "btn6" : ".txt Downloaded!",
        "btn7" : "Text Cleared!"
    }
    const beforetext = {
        "btn1" : "Convert to Uppercase",
        "btn2"  : "Convert to Lowercase",
        "btn3"  : "Capitalize",
        "btn4"  : "Remove Extra Spaces",
        "btn5"  : "Copy to Clipboard",
        "btn6" : "Download .txt",
        "btn7"  : "Clear Text"
    }
    const targetBtn = document.getElementById(btn)

    targetBtn.innerText = afterText[btn]
    setTimeout(()=>{
        targetBtn.innerText = beforetext[btn]
    },2000)
}

function TextForm(props){

    const [text, setText] = useState("") // here 'text' is the variable(state) and setText is function responsible for updating that
    // text = "Here is the text" // We cannot update the variable using assignment
    // We can update only using setText Function
    // setText("Hello")
    const handleUpperCaseClick = (e) =>{
        const newText=text.toUpperCase()
        setText(newText)
        updateBtn(e.target.id)
    }

    const handleLowerCaseClick = (e) =>{
        const newText=text.toLowerCase()
        setText(newText)
        updateBtn(e.target.id)
    }

    const handleCapitalizeClick = (e) =>{
        
        const newText=capitalize(text.toLowerCase())
        setText(newText)
        updateBtn(e.target.id)
    }

    const handleRemoveExtraSpaceClick = (e) =>{

        const newText= removeExtraSpaces(text)
        setText(newText)
        updateBtn(e.target.id)
    }

    const handleClearTextClick = (e)=>{
        setText('')
        updateBtn(e.target.id)
    }

    // const handleDownloadClick = (e) =>{
    //     // fs.writeFile('./file.txt',text ,(err)=>{
    //     //     if(err)
    //     //     {
    //     //         console.log(err)
    //     //     }
    //     //     else{
    //     //         console.log("Written to the file")
    //     //     }
    //     // })
    //     // The above code doesn't work as,
    //     // If you want to write to a file, you would need to send an API request from your browser / React to a server and have that server write to the file system.
    //     updateBtn(e.target.id)
    // }

    const handleCopyClick = (e) =>{
        const textArea = document.getElementById('myTextBox')
        textArea.select()
        document.execCommand('copy');
        document.getSelection().removeAllRanges()
        updateBtn(e.target.id)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    return(
        <>
        <div className='container my-1'>
            <h3 style = {{color: props.mode ==='dark'? '#d9d9d9' : 'black'}}>{props.heading}</h3>
            <div className="mb-3 my-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextBox" rows="8" placeholder="Enter text here" style = {{color: props.mode ==='dark'? '#d9d9d9' : 'black', backgroundColor: props.mode ==='dark'? '#070526' : 'white',  border : props.mode ==='dark'? '1px solid white' : '1px solid black'}}></textarea>
                <button className="btn btn-primary mt-3 mx-2" disabled={text.length === 0} id="btn1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-success mt-3 mx-2" disabled={text.length === 0} id="btn2" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-warning mt-3 mx-2" disabled={text.length === 0} id="btn3" onClick={handleCapitalizeClick}>Capitalize</button>
                <button className="btn btn-danger mt-3 mx-2" disabled={text.length === 0} id="btn4" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
                <button className="btn btn-success mt-3 mx-2" disabled={text.length === 0} id="btn5" onClick={handleCopyClick}>Copy to Clipboard</button>
                {/* <button className="btn btn-primary mt-2 mx-2" disabled={text.length === 0} id="btn6" onClick={handleDownloadClick}>Download .txt </button> */}
                <button className="btn btn-primary mt-3 mx-2" disabled={text.length === 0} id="btn7" onClick={handleClearTextClick}>Clear Text</button>
            </div>
        </div>
        <div className='container' style ={{color: props.mode ==='dark'? '#d9d9d9' : 'black'}}>
            <h5>Text summary:</h5>
            <p>
                Words count: {wordsCount(text)}<br/>
                Characters count: {text.length}<br/>
                Time to Read: {(0.008 * wordsCount(text)).toFixed(2)} minutes
            </p>
            <div className="card" style = {{border : props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                <div className="card-header bg-secondary" style = {{ backgroundColor: props.mode ==='dark'? '#000d1a' : '#000d1a'}}>
                    <b>Preview</b>
                </div>
                <div className="card-body" style = {{color: props.mode ==='dark'? 'white' : 'black', backgroundColor: props.mode ==='dark'? '#070526' : 'white'}}>
                    <p>{text.length === 0 ? "Enter some text above to preview!" : text}</p>
                </div>
            </div>
        </div>
        <div style={{height: "50px"}}></div>
        </>
    )
}
export default TextForm;