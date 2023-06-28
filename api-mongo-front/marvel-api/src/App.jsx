import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const App = () => {

 const [marvel,setMarvel]= useState([])
 const [backend, setBackend] = useState([])

 const getMarvelAPI = async()=>{
  const url = `https://gateway.marvel.com:443/v1/public/characters?${import.meta.env.VITE_PASSWORD}`
  const {data: {data:{results}}} = await axios.get(url)
  console.log(results)
  setMarvel(results)
 }

 const handlSubmit = async(element) =>{
  console.log("aqui handle")
  if(element){
    const dataToSend = {
      name: element.name,
      description: element.description,
      id: element.id
    }

    const url ='http://localhost:5002/marvel'
    const response = await axios.post(url, dataToSend);
    console.log("info", response)
    setBackend(response)
  }
 }

 useEffect(()=>{
  getMarvelAPI()
  handlSubmit()
 },[])

  return (
    <div>
      <h1>Personajes favs de marvel</h1>
      {marvel.map(element =>
        <Card key={element.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${element.thumbnail.path}.${element.thumbnail.extension}`} />
        <Card.Body>
          <Card.Title>{element.name}</Card.Title>
          <Card.Text>
            {element.description}
          </Card.Text>
          <Button onClick={()=> handlSubmit(element)}>★</Button>
        </Card.Body>
      </Card>
        )}
    </div>
  )
}

export default App
