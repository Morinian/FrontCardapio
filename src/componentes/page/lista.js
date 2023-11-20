import Styles from './css/lista.module.css';
import Quadro from '../prop/quadro';
import React, { useEffect, useState } from 'react';

function Listar() {

  const[foods,setFoods]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/food/listar")
    .then(res=>res.json())
    .then((result)=>{
      setFoods(result);
    }
  )
  },[])

    return (
      <div className={Styles.listar}>
        <div className={Styles.caixa}>
        
        {foods.map(foods=>(
            <Quadro key={foods.id}
            nome={foods.title}
            imgs={foods.image}
            preco={foods.price}>

            </Quadro>
        ))
        }

        </div>
      </div>
    );
  }
  
  export default Listar;
  