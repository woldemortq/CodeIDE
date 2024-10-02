import React, { useState, useEffect } from 'react';
import preview from './images/preview.svg';

function Prev() {
const fullText = "Where teams build faster, together."
const [displayedText, setDisplayedText] = useState('');


useEffect(() =>{
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < fullText.length) {
      setDisplayedText(fullText.substring(0, index + 1))
      index++
    } else {
      clearInterval(intervalId);
    }
  },  80);

  return ()=> clearInterval(intervalId)

}, [])

  return (
    <>
    <img src={preview} alt="" className='prev'/>
      <div className="main-text">
        <li className="text1">Code Sandbox</li>
        <li className="text2">{displayedText}</li>
        <li className="text3">
          Create, shape, and get feedback with collaborative <br />
          sandboxes for rapid web development.
        </li>
        <button className="start">&lt;/&gt; Start coding for free</button>
      </div>
    </>
  );
}
export default Prev;
