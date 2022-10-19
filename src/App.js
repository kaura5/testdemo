import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import Women from './Women';
import Container from '@mui/material/Container';
import { Routes, Route} from 'react-router-dom';

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
      <Header />
      <Routes>
        <Route path="/" element={<Card data={data} />} />
        <Route path="/women" element={<Women data={data} />} />
        </Routes>
      {/* <Card data={data}/> */}
      </Container>
    </div>
  );
}

export default App;
