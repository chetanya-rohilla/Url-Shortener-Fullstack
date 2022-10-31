import {createRef, useState} from "react"
import "./style.css"
const textRef = createRef()

function shortAPI(setShortUrl) {
    fetch('http://localhost:3001/url/shorten', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            longUrl : textRef.current.value
        })
      })
        .then((response) => response.json())
        .then((data) => {
            setShortUrl(data.data.shortUrl);
        })
        .catch((error) => {
          console.error('Error:', error);
          setShortUrl("Give a correct Url");
        }); 
}

const Short = () => {
    const [shortUrl, setShortUrl] = useState()

    return  <div className="container">
        <h2>Shorten URL</h2>
        <input type="text" ref={textRef} />
        <br/>
        <button onClick={() => shortAPI(setShortUrl)} >Shorten</button>
        <br/>
        <p>{shortUrl}</p>
    </div>
}

export default Short