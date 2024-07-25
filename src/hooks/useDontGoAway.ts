//allow the hook to accept param titles of type array string
//document title should animate i.e. when the tab loses focus
// js allows for a visibility change event
// as soon as the hook mounts; you can begin to listen to events using react's use-event-hook, provide the empty dependency array
//https://www.npmjs.com/package/react-use-event-hook
// make sure that it fires on mount only -- i.e.
// BEST PRACTICE TO REMOVE REACT HOOK WHEN IT UNMOUNTS -- do this return a function from the use-effect
//whatever object/state is in this function is fired as part of the unmounting process - use this function's return to remove your event listener
import {useEffect} from "react"
export const useDontGoAway = (titles: string[]) => {
    const handleVisibilityChange = () => {
        // when the value of the document.visibility state is NOT visible - you should then iteterate through the titles
        // passed to your hook, Mkay?
    }
    useEffect(() => {
        document.addEventListener("visibilitychange", handleVisibilityChange) 
        //the listener function is named handleVisibilityChange
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, []) //since this only runs on mount, you will pass an empty array, i.e. empty dependency list to the use-effect-hook
}