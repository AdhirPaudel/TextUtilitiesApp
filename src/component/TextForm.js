import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'

export default function TextForm(prop) {
    const ConvertToUp = () => {
        let newText = text.toUpperCase()
        setText(newText)
        prop.showAlert("Converted to Upper Case",'success')
    }
    const ConvertToLo = () => {
        let newText = text.toLowerCase()
        setText(newText)
        prop.showAlert("Converted to Lower Case",'success')
    }
    const ClearText = () => {
        let newText = '';
        setText(newText)
        prop.showAlert("TextBox Cleared",'success')
    }
    const TitleCase = () => {
        let newText = text;
        try {
            newText = newText.split(" ");
            for (let i = 0; i < newText.length; i++) {
                newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
            }
            let newTexting = newText.join(' ')
            setText(newTexting)
            prop.showAlert("Converted to Title Case",'success')
        } catch (error) {
            console.log("error in split");
        }

    }
    const SentenceCase = () => {
        let newText = text;
        newText = newText.split('.')
        for (let i = 0; i < newText.length; i++) {
            if (i === 0) {
                newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
            }
            else {
                let j = 0;
                while (j < newText[i].length) {
                    if (newText[i][j] !== ' ') {
                        newText[i] = newText[i].charAt(j).toUpperCase() + newText[i].slice(j + 1)
                        break
                    }
                    j += 1;
                }
                while (j) {
                    newText[i] = ' ' + newText[i]
                    j -= 1
                }

            }

        }
        newText = newText.join('.')
        setText(newText)
        prop.showAlert("Converted to Sentence Case",'success')

    }
    const onchangeValue = (e) => {
        setText(e.target.value)
    }
    // const Button_To_See_The_Preview = () => {
    //     <Navigate to="previewText" replace={true} />
    // }
    const [text, setText] = useState("enter text here");
    return (
        <>
            <div className='container mt-4' style={{color: prop.mode ==='light'?'black':'white'}}>
                <h2>{prop.textHeading}</h2>
                <form>
                    <div className="form-group">
                        <textarea type="textbox" className="form-control" id="idBox" value={text} onChange={onchangeValue} aria-describedby="textHelp" placeholder="Enter text" rows='8' style={{backgroundColor: prop.mode ==='light'?'white':'gray',
                    color: prop.mode ==='light'?'black':'white'}}/>
                    </div>
                </form>
                <button type="button" className="btn btn-primary my-4" onClick={ConvertToUp}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={ConvertToLo}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary my-4" onClick={SentenceCase}>Sentence Case</button>
                <button type="button" className="btn btn-primary my-4 mx-2" onClick={TitleCase}>Title Case</button>
                <button type="button" className="btn btn-primary my-4" onClick={ClearText}>Clear Text</button>
            </div>


            <div className='container' style={{color: prop.mode ==='light'?'black':'white'}}>
                <h2>Time to Read the Text</h2>
                <p>total words: {text.split(' ').length} and charachters length: {text.length}</p>
                <p>text reading time: {0.008 * text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            {/* <button type="button" className="btn btn-primary my-4" onClick={Button_To_See_The_Preview}>Submit Button</button> */}

        </>
    );
}