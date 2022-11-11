import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - HOME Food`
    },[title])
};
export default useTitle ;