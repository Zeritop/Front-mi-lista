import { useState } from 'react';

const useAdd = () => {
    const  [add, setAdd] = useState(false);
    return {
        add, 
        setAdd
    }
}

export { useAdd }