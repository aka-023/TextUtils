//react ka function based component lane ke liye -> rfc
import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Converted to Uppercase', 'success');
  }

  const handleLoClick = () => { 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' Converted to Lowercase', 'success');
  }

  const handleCapClick = () => {
    // handleLoClick();
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert(' Converted to Capitalized Case', 'success');
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(' Extra spaces removed', 'success');
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    // .then( () => {
    //   alert('copied to clipboard');
    // })
    // .catch( (error) => {
    //   alert('error copying to clipboard', error);
    // });
    props.showAlert(' Text copied to clipboard', 'success');
  };

  const handleClear = () =>{
    let newText = '';
    setText(newText);
    props.showAlert(' Textarea cleared', 'success');
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
    </div>
    <button className='btn btn-info mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
    <button className='btn btn-info mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
    <button className='btn btn-info mx-1' onClick={handleClear}>Clear Textarea</button>
    <button className='btn btn-info mx-1' onClick={handleCapClick}>Convert to CapitalizedCase</button>
    <button className='btn btn-info mx-1' onClick={handleCopy}>Copy to Clipboard</button>
    <button className='btn btn-info mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>

    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} letters</p>
      <p> {0.008 * text.split(" ").length} minutes to Read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ?text:'Enter Something to preview here...'}</p>
    </div>
    </>
  )
}

// style={{backgroundColor: props.mode === 'dark'?'grey':'light' , color: props.mode === 'dark'?'light':'dark'}}