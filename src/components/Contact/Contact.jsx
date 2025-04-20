import './Contact.css'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Наши контакты</span>
                <span className='primaryText'>Легко связаться с нами</span>
                <span className='secondaryText'>Мы всегда готовы помочь вам, предоставляя лучшие услуги. Мы верим, что хороший свет может сделать вашу жизнь лучше.</span>

                <div className="flexColStart contactModes">
                    {/* первая колонка */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Позвонить</span>
                                    <span className='secondaryText'>+7 (001) 001-01-01</span> 
                                </div>
                            </div>
                            <div className="flexCenter button">Позвонить сейчас</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Чат</span>
                                    <span className='secondaryText'>+7 (001) 001-01-01</span> 
                                </div>
                            </div>
                            <div className="flexCenter button">Позвонить сейчас</div>
                        </div>
                    </div>

                    {/* вторая колонка */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Видеозвонок</span>
                                    <span className='secondaryText'>+7 (001) 001-01-01</span> 
                                </div>
                            </div>
                            <div className="flexCenter button">Видеозвонок сейчас</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Сообщение</span>
                                    <span className='secondaryText'>+7 (001) 001-01-01</span> 
                                </div>
                            </div>
                            <div className="flexCenter button">Написать сейчас</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* правая сторона */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact