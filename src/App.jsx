import { useState } from 'react'
import './App.css'
import { equipos } from './data'

function App() {
  const [count, setCount] = useState(equipos)
  const [search, setSearch] = useState('')
 
 
  const existe = (arr,par)=> arr.includes(par)
  const handlerSubmit = (e) => {
    e.preventDefault()
  }
const handlerChange = (e) =>{
  setSearch(e.target.value)
  console.log(search)
 
}
  return (
    <>
     <h1>Modelos compatibles de {count[1].marca.toUpperCase()} </h1>
     
      <form onSubmit={handlerSubmit}>
        <input type="text"
          name='search'
          placeholder='A50' 
          onChange={handlerChange}
          />
        <button>buscar</button>
      </form>
      {count.map(equipo => equipo.models.map(item => 
        existe(item, search) ?
          item.map(i => <li key={i}>{i}</li>)
         :
         ''))}
    </>
  )
}

export default App
