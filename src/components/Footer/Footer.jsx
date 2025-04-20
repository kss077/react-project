import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* левая сторона */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Наше видение заключается в том, чтобы сделать всех людей <br/>
            лучшее место для жизни.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className='primaryText'>Информация</span>
          <span className='secondaryText'>Москва, Россия</span>

          <div className="flexCenter f-menu">
            <span>Недвижимость</span>
            <span>Услуги</span>
            <span>Продукт</span>
            <span>О нас</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer