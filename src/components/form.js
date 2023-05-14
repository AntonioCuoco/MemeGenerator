import { react } from 'babel-types'
import React from 'react'
import '../components/style/form.css'
import { useState } from 'react'
import { async } from 'regenerator-runtime'

export default function Form() {

// const [memeImage, setMimeImage] = react.useState("")

const [meme,setMeme] = React.useState({
    topText: "",
    bottomText : "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setallMimeImages] = React.useState([])

React.useEffect(() => {

    fetch("https://api.imgflip.com/get_memes")
    .then(Response => Response.json())
    .then(data => setallMimeImages(data.data.memes)) // utilizziamo data.data.memes poichè il primo data è quello della fetch, il secondo è la data dentro datamemes.js e poi memes sotto data dentro datamemes.js

}, [])                                          // le dipendendenze verrano lasciate vuote poichè non c'è un cambio di api che richiede un re-render, per esempio se andassimo a chiedere un personaggio da un api e poi tramite un bottone vorremmo passare a un secondo personaggio del api, li servirebbe una dipendenza counter che gestisce

function getMemeImage() {   
     const randomNumber = Math.floor(Math.random() * allMemeImages.length)
     const url2 = allMemeImages[randomNumber].url
     setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url2,
     }))

    //  imgMeme = document.getElementById('img-meme'),
    // imgMeme.src = url;
}

function handleChange(event) {
    const {name,value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))

}

    return(
     <div className='form-container flex-column'>
        <div className='input-container flex-row'>
            <input type='text' placeholder='Top text' className='inputText1 p-1 mt-5' name='topText' value={meme.topText} onChange={handleChange}/>
            <input type='text' placeholder='Bottom text' className='inputText2 p-1 mt-5 ml-1' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
        </div>
        <button className='btn-newImage button mt-2' onClick={getMemeImage}>Get a new meme image</button>
        <div className="meme">
                <img src={meme.randomImage} id='img-meme' alt='' name="randomImage"/>
                <h2 className="meme--text1 top">{meme.topText}</h2>
                <h2 className="meme--text2 bottom">{meme.bottomText}</h2>
            </div>
        
     </div>   
    );
}