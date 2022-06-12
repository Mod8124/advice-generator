import UseFetch from "./composables/UseFetch"
import { useEffect } from 'react';


const AppLogic = () => {
    const {advice,get} = UseFetch()
    const KEY = 'https://api.adviceslip.com/advice'

     const handleClick = () => {
      get(KEY)
     }

     useEffect(()=> {
      get()
      },[KEY])

     return {
        advice,
        handleClick
     }
}

export default AppLogic;