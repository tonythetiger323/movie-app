import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
    
  useEffect(() => {
    console.log("useEffect");

    const fetchData = async () => {
      try{
        const response = await fetch("https://randomuser.me/api/?results=10");
        const users = await response.json();

        setUsers([...users.results]);
      }catch(e){
        console.error(e);
      };
    };
    fetchData()
  }, []);

  console.log("users1", users)
  
  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
