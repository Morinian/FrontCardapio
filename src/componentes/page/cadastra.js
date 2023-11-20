import Styles from './css/cadastro.module.css';
import React, { useEffect, useState } from 'react';

function Cadastrar() {

  const [title, setTitle] = useState('')
  const [image,setImage] = useState('')
  const [price,setPrice] = useState('')

  const handleClick = (e)=>{

    e.preventDefault()
    const foods = {title, image, price}
    console.log(foods)

    fetch("http://localhost:8080/food/cadastrar",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(foods)
  
    }).then(()=>{
      console.log("O Alimento foi adicionado")
    })
    setTitle('')
    setImage('')
    setPrice('')
}

    return (
      <div className={Styles.cadastrar}>
        <div className={Styles.forme}>

              <label>
                Name:
                <input type="text" 
                  value ={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </label>

             <label>
              Preço:
                <input type="text" 
                  value ={price}
                  onChange={(e)=>setPrice(e.target.value)}
                />
             </label>

             <label>
              IMG URL:
              <input type="text" 
                value ={image}
                onChange={(e)=>setImage(e.target.value)}
              />
             </label>

              <button onClick={handleClick}>
                Enviar
              </button>
        </div>
      </div>
    );
  }
  
  export default Cadastrar;
  