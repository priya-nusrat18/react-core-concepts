import React, { useState , useEffect  }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop',
    price:'$66.66'},
    {name: 'Illustrator',
    price:'$23.66'},
    {name: 'PDF Reader',
    price:'$90.66'},
     {name: 'Book Reader',
    price:'$10.66'}
    ]
    const menus = ['Home', 'About', 'Blog', 'Page', 'Contact']
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
          <ul>
            {
              menus.map(menu => <li>{menu}</li>)
            }
          </ul>
          {
            products.map(pd => <Product product= {pd}></Product>)
          }
          {/* <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product> */}
          
      </header>
    </div>
  );
 }

function Product(props) {

  const countryStyle ={
    color: 'black',
    backgroundColor: '#afafaf',
    border:'2px solid gray',
    height:'250px',
    width:'200px',
    float:'left',
    padding:'10px',
    margin:'10px',
  }
  const {name , price}=props.product;
  return(
    <div style={countryStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);


  const handleDecrease = ()=> {
   setCount(count - 1 );
  }

  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={ () =>setCount(count +1 ) }>increase</button>
      <button onClick={handleDecrease} disabled={count === 0 ? true :false }>decrease</button>
    </div>
  );
};



 function User() {
   const [users, setUsers] = useState([]);

   useEffect ( () => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data));
   }, [])
  return (
    <div>
      <h3>Dynamic data : {users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}

export default App;
