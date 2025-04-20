import './Header.css'
import logo from '../../../public/logo.png'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { useState } from 'react'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened && "-100%"
      }
    }
  }

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src={logo} alt="logo" width={100} />


            <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}>
                <div className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
              >
                <a href="">Недвижимость</a>
                <a href="">Связаться с нами</a>
                <a href="">Начать</a>
                <button className='button'>
                  <a href="">Контакт</a>
                </button>
              </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
        </div>
        
    </section>
  )
}

export default Header