import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Tourest`
    },[title])
};


export default useTitle;