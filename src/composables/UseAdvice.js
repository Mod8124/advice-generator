const { useState } = require("react");

const UseAdvice = (url) => {
    const [advices, setAdvices] = useState(null)
    const get = async () => {
        try {
            const res = await fetch(url)

            if(!res.ok) {
                throw Error('not advices available')
            } else {
                const data = await res.json();
                setAdvices(data)
            }
    
        } catch(err) {
            console.log(err)
        }
    }
    return {
        get,advices
    }
}

export default UseAdvice;