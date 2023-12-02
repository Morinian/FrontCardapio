import Styles from './css/lista.module.css';
import Quadro from '../prop/quadro';
import React, { useEffect, useState } from 'react';

function Listar() {

  const[food,setFoods]=useState([]);

  useEffect(()=>{
    fetch("https://apicardapiojava.up.railway.app/food/listar")
    .then(res=>res.json())
    .then((result)=>{
      setFoods(result);
    }
  )
  },[])

    return (
      <div className={Styles.listar}>
        <div className={Styles.caixa}>
        
        {food.map(food=>(
            <Quadro key={food.id}
            nome={food.title}
            imgs={food.image}
            preco={food.price}>

            </Quadro>
        ))
        }

        </div>
      </div>
    );
  }
  
  export default Listar;
  