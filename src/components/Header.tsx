import {Link} from 'react-router-dom'
import logo from '../assets/img/meacha.svg'

export const Header = () => {
  return (
    <header>
      <div className='nav-bar'>
        <div className="logo">
          <img src={logo} alt="logo da aplicação" />
          <Link to='/meacha/'>Me Acha!</Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to='/meacha/'>Achar CEP</Link>
            </li>
            <li>
              <Link to='/meacha/rua'>Achar Rua</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
