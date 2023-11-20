import Styles from './css/navbar.module.css';
import {Link} from 'react-router-dom'

function Menu() {
    return (
      <div className={Styles.menu}>
        <Link to='/' className={Styles.link}>Cadastrar</Link>
        <Link  to='/listar' className={Styles.link}>Listar</Link>
      </div>
    );
  }
  
  export default Menu;
  