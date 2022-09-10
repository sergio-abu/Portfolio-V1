import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>

        <div className='left'>
          <a href="#intro" className='logo'>Sergio A. S.</a>
          <div className="itemContainer">
            <FontAwesomeIcon className='icon'icon={faEnvelope} />
            <span>sergio-abu@proton.me</span>
          </div>
          <div className="itemContainer">
            <FontAwesomeIcon className='icon'icon={faWhatsapp} />
            <span>+55 53 981147772</span>
          </div>
        </div>

        <div className='right'>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>

      </div>
    </div>
  )
}
