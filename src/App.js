import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Card';
import Container from '@mui/material/Container';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <Container>
      <h1>My Store</h1>
      <Card data={data}/>
      </Container>
    </div>
  );
}

export default App;
