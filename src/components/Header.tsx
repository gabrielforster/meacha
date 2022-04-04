import {Link} from 'react-router-dom'
import logo from '../assets/img/meacha.svg'

export const Header:React.FC = () => {
  return (
    <header>
      <div className='nav-bar'>
        <div className="logo">
          <img src={logo} alt="logo da aplicação" />
          <Link to='/meacha/'>Me Acha!</Link>
        </div>
        <div className="nav-links">
            <Link to='/meacha/'>Usar CEP</Link>
            <Link to='/meacha/rua'>Usar Rua</Link>
        </div>
      </div>
    </header>
  )
}
