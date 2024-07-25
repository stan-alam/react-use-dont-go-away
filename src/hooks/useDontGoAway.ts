
import {useEffect, useState} from "react"
export const useDontGoAway = (titles: string[]) => {
    const [shouldIterateTitles, setShouldIterateTitles] = useState(false) //initial state is false
    const handleVisibilityChange = () => {
        setShouldIterateTitles(document.visibilityState !== 'visible') //now the stateful var changes when the visibility of the page changes
    }
    useEffect(() => {
        document.addEventListener("visibilitychange", handleVisibilityChange) 
        
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, []) 
}