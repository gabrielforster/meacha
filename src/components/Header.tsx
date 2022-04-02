import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className='nav-bar'>
        <div className="logo">
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
