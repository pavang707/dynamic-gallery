import './App.css';
import React,{useState} from 'react'
import Card from './component/Card'
function App() {
 const [images,setimages]=useState([
 {url:"https://source.unsplash.com/random/1"},
 {url:"https://source.unsplash.com/random/2"},
 {url:"https://source.unsplash.com/random/3"},
 {url:"https://source.unsplash.com/random/4"},
 {url:"https://source.unsplash.com/random/5"},
 {url:"https://source.unsplash.com/random/6"}
])
const getnewimages=()=>{
  setimages([...images,{
    url:`https://source.unsplash.com/random/${Math.floor(Math.random()*100)}`
  }])
}
const removeimage=()=>{
  setimages(images.slice(0,-1))
}
  return (
    <section className="hero">
      <div className="cardContainer">
      <Card
      images={images}
      />
  
      </div>
      <div className="btnContainer">
        <button onClick={removeimage}>Reverse</button>
        <button onClick={getnewimages}>Add</button>
    </div>
    </section>
  );
}

export default App;
