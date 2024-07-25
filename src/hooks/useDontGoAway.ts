
import {useEffect, useState} from "react"
export const useDontGoAway = (titles: string[]) => {
    const [shouldIterateTitles, setShouldIterateTitles] = useState(false) //initial state is false
    const handleVisibilityChange = () => {
   
    }
    useEffect(() => {
        document.addEventListener("visibilitychange", handleVisibilityChange) 
        
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, []) 
}