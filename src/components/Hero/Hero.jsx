import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
            Откройте для себя  <br/>
            наиболее подходящую <br/>
            недвижимость
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className='secondaryText'>Найти подходящую вам недвижимость очень легко.</span>
            <span className='secondaryText'>Забудьте обо всех трудностях, связанных с поиском жилья для вас</span>
          </div>

          <div className="flexCenter search-bar">
            <i class="fa-solid fa-location-dot" />
            <input type="text" />
            <button className='button'>Поиск</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                9000
                <span>+</span>
              </span>
              <span className='secondaryText'>Премиальные продукты</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                2000
                <span>+</span>
              </span>
              <span className='secondaryText'>Счастливые владельцы</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                28
                <span>+</span>
              </span>
              <span className='secondaryText'>Победа в конкурсе</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero