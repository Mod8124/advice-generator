import divideMobile from '../../assets/images/pattern-divider-mobile.svg';
import divideDesktop from '../../assets/images/pattern-divider-desktop.svg';
import next from '../../assets/images/icon-dice.svg';
import './Card.css';
import { useQuery } from '@tanstack/react-query';

const Card = ( ) => {

    const URL = 'https://api.adviceslip.com/advice';

    const { data:advice, isLoading, refetch, error, isRefetching  } = useQuery(['advice'], async ()=> {
        return await fetch(URL).then(res => res.json());
    });

    
    if (isLoading) return (
        <h2>Loading...</h2>
    );

    if (isRefetching) return (
        <h2>Loading new advice</h2>
    );

    if (error) return (
        <h2>Errorr.....</h2>
    )

    return (
        <article className='card'>

              <h3>advice  #{advice && advice.slip.id}</h3>

              <p>{advice && "\"" +  advice.slip.advice + "\""}</p>

                  <div className='divideMobile'><img src={divideMobile} className="App-logo" alt="logo" /></div>
                  <div className='divideDesktop'><img src={divideDesktop} className="App-logo" alt="logo" /></div>

              <div className='iconImage'>
                    <div className='icon'  onClick={refetch}>
                    <img src={next} alt={next+'simbol for next advice'} />
                    </div>
              </div>

        </article>
    )

}

export default Card;