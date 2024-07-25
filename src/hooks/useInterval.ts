import {useRef} from 'react';
export const useInterval = (callback: () => void, interval: number) => {
    const callbackRef = useRef(callback); //make sure everytime the callback is updated/changed, you willupdat the current value of the callbackRef
}