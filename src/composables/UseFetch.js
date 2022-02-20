const { useState } = require("react");

const UseFetch = (url) => {
    const [advice, setAdvices] = useState(null)
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
        get,advice
    }
}

export default UseFetch;