import divideMobile from '../images/pattern-divider-mobile.svg'
import divideDesktop from '../images/pattern-divider-desktop.svg'
import next from '../images/icon-dice.svg'

const Card = ({advice, handleClick}) => {

    return (
        <article className='card'>

              <h3>advice  #{advice && advice.slip.id}</h3>

              <p>{advice && "\"" +  advice.slip.advice + "\""}</p>

                  <div className='divideMobile'><img src={divideMobile} className="App-logo" alt="logo" /></div>
                  <div className='divideDesktop'><img src={divideDesktop} className="App-logo" alt="logo" /></div>

              <div className='iconImage'>
                    <div className='icon'  onClick={handleClick}>
                    <img src={next} alt={next+'simbol for next advice'} />
                    </div>
              </div>

        </article>
    )

}

export default Card;