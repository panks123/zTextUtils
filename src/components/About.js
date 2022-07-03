import React from 'react'


function About(props)
{
    
    function handleClick(e)
    {
        const btnId = e.target.id;
        const targetEle = document.getElementById("collapse" + btnId.slice(3)) 
        if(targetEle.className.endsWith('collapse'))
        {
            targetEle.className = "accordion-collapse collapse show"
        }
        else if(targetEle.className.endsWith('show'))
        {
            targetEle.className = "accordion-collapse collapse"
        }

    }

    let themeStyle = {
        color : props.mode ==="dark" ? "#d9d9d9" : "black",
        backgroundColor : props.mode ==="dark" ? "#070526" : "white",
        border: "1px solid",
        borderColor: props.mode ==="dark" ? "#d9d9d9" : "grey"
    }
    
    const iStyle={
        color: 'rgb(232, 41, 31)',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
        marginRight: '1px',
    }

    return(
        <div className="container my-3" style={{color : props.mode ==="dark" ? "#d9d9d9" : "black"}}>
            <h3>About <span style={iStyle}>z</span>TextUtils</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={themeStyle}>
                    <h2 className="accordion-header" id="headingOne" onClick={handleClick}>
                    <button className="accordion-button" style={themeStyle} type="button" id="btn1" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Manipulate and Analyze Your text
                    </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to manipulate and analyze your text quickly and efficiently. Be it case conversion, Copying to clipboard word count, character count etc. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2" style={themeStyle}>
                    <h2 className="accordion-header" id="headingTwo" onClick={handleClick}>
                    <button className="accordion-button collapsed" style={themeStyle} type="button" id="btn2" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2" style={themeStyle}>
                    <h2 className="accordion-header" id="headingThree" onClick={handleClick}>
                    <button className="accordion-button collapsed" style={themeStyle} type="button" id="btn3" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-3" onClick={toggleThemeStyle}>{btnText}</button> */}
            <div style={{height: "500px"}}></div>
        </div>
        )
}


export default About;