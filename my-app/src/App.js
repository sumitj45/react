import React,{useState} from 'react';
import './App.css';
import Product from './components/product';


function App() {
 
  return (
    <div className="container text-center">

     <h1>Products</h1>
     <hr/>

     <Product name="Hp Laptop"description="A good budget laptop" price={100}/>
     <hr/>
     <Product name="Bluetooth Speaker" description="Very good base and sound" price={40}/>
     <hr/>
     <Product name="google Mini" description="a Way to the new gen" price={69}/>
  
    </div>
  );
}

export default App;
