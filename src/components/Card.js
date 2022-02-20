import divideMobile from '../images/pattern-divider-mobile.svg'
import divideDesktop from '../images/pattern-divider-desktop.svg'
import next from '../images/icon-dice.svg'
import UseAdvice from '../composables/UseAdvice'
import { useState } from 'react'

const Card = ({advice}) => {
    const key = 'https://api.adviceslip.com/advice'
    const [show, setShow] = useState(true)
    const [loading, setLoading] = useState(false)
   const {advices, get} = UseAdvice(key)
    return (
        <div className='card'>
              <h3>advice  #{show && advice && advice.slip.id}{!show && advices && advices.slip.id} {!show && !advices && 'loading'}</h3>
              <p>"{show && advice && advice.slip.advice} {!show && advices && advices.slip.advice} {!show && !advices && 'loading'}"</p>
                <div className='divideMobile'><img src={divideMobile} className="App-logo" alt="logo" /></div>
                <div className='divideDesktop'><img src={divideDesktop} className="App-logo" alt="logo" /></div>
              <div className='iconImage'>
                    <div className='icon'>
                    <img src={next} alt={next, 'simbol for next advice'} onClick={()=> {
                   get()
                   setShow(false)
               }} />
                    </div>
              </div>

        </div>
    )

}

export default Card;