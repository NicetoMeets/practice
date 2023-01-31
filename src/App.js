import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import bg from './img/bg.png'
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  const [shoes] = useState(data);
  const Navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" style={{marginLeft:'20px'}}>쇼핑몰</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>(Navigate('/'))}>홈</Nav.Link>
          <Nav.Link onClick={()=>(Navigate('/detail'))}>상세페이지</Nav.Link>
          <Nav.Link onClick={()=>(Navigate('/item'))}>아이템</Nav.Link>
        </Nav>

      </Navbar>
    <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>

    
    
    <Routes>
      <Route path='/' element={
    <div className='container'>
    {shoes.map((shoes, i)=>(
    <Card shoes={shoes} i={i+1}/>))}
    </div>
    }></Route>
      <Route path='/detail' element={<Detail/>}></Route>
      <Route path='/item' element={<p>아이템이에요</p>}></Route>
    </Routes>
    
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
