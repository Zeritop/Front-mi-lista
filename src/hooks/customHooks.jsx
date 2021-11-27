import { useState } from 'react';

const useAdd = () => {
    const  [add, setAdd] = useState(false);
    return {
        add, 
        setAdd
    }
}

const useFormAuth = () => {
    const [inpVal, setInpVal] = useState('');
    return {
        inpVal,
        setInpVal
    }
}

export { useAdd, useFormAuth }