import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);
  return (
    <div className='container-fluid row bg-secondary'>
      {data.map((character) => (
          <p key={character.id} style={{ width: "18rem", margin: "0.5rem" }}>
            <img src={character.image} className="" alt="logo" /> <br/>
            <span className='text-white'>{character.name}</span><br/>
            <span className='text-white'>{character.species}</span><br/>
            <a  class="btn btn-primary btn-sm" href={character.url} target="_blank">
              More Info
            </a>
         </p>
      ))}
    </div>
  );
}

export default App;
