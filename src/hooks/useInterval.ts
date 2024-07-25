import {useRef,useEffect} from 'react';
export const useInterval = (callback: () => void, interval: number) => {
    const callbackRef = useRef(callback); 

    useEffect(() => { //here we implementing useEffect so when callback is updated/changed, useEffect will update the current value of the callbackRef
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {

    }, [interval])
}