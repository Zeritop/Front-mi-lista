import { useState } from 'react';

const useBoolean = (bool = false) => {
    const  [boolean, setBoolean] = useState(bool);
    return {
        boolean, 
        setBoolean
    }
}

const useFormAuth = () => {
    const [inpVal, setInpVal] = useState('');
    return {
        inpVal,
        setInpVal
    }
}

export { useBoolean, useFormAuth }