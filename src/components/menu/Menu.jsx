import './menu.css'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#cover">Cover</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
