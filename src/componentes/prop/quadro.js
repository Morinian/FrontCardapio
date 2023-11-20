import Styles from './quadro.module.css';


function Quadro({nome, preco, imgs,}) {
    return (
      <div className={Styles.quadro}>
        
            <h3>{nome}</h3>

            <img src={imgs} alt='produto' />
            
            <h4>R$ {preco}</h4>

      </div>
    );
  }
  
  export default Quadro;
  