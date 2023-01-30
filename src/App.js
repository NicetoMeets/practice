import './App.css';
import Nav from 'react-bootstrap/Nav';
import bg from './img/bg.png'
import data from './data';
import { useState } from 'react';

function App() {

  const [shoes] = useState(data)

  return (
    <>
      <Nav
      activeKey="/home"
      onSelect={(e) => alert(`selected ${e}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">쇼핑몰</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
    <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>

    
    <div className='container'>
    {shoes.map((shoes, i)=>(
      <Card shoes={shoes} i={i+1}/>))}
    </div>
    
    </>
  );
}

function Card({shoes, i}){
  return (
    <div className='item'>
        <img src={`https://codingapple1.github.io/shop/shoes${i}.jpg`} width='80%'></img>
        <p>{shoes.title}</p>
        <p>{shoes.price}원</p>
        </div>
  )
}

export default App;
