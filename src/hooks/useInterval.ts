import {useRef,useEffect} from 'react';
export const useInterval = (callback: () => void, interval: number, shouldRun : boolean) => {
    const callbackRef = useRef(callback); 

    useEffect(() => { //here we implementing useEffect so when callback is updated/changed, useEffect will update the current value of the callbackRef
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {

        if(!shouldRun) {
            return;
        }
        const id = setInterval(() => callbackRef.current(), interval); //this will be used for "proper cleanup of the setInterval"
       
        return () => clearInterval(id); //use js clearInterval() to reset value
    }, [interval, shouldRun])
}