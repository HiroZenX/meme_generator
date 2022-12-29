import { useState } from 'react';
import memeData from '../memesData';

export default function Input() {

  const [memeimg, setMemeImg] = useState("");

    function generateRandomMeme(){
        const memesArray = memeData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNum].url);
        setMemeImg(memesArray[randomNum].url)
    }
    
  return (
    <div className="content">
      <div className="form">
            <div className="input">
                <input placeholder="Shut up" type="text"/>
                <input placeholder="and take my money" type="text"/>
            </div>
            <button onClick={generateRandomMeme}>Get a new meme Image</button>
    </div>
    <div className="meme">
        <img src={memeimg} />
    </div>
    </div>
  )
}
