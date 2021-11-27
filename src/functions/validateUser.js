const validateUser = () => {
    let headers = {};

    if(localStorage.getItem('tk')){
        const token = localStorage.getItem('tk');
        headers = { 'auth-token': `Bearer ${token}` };
    }

    return headers;
}

export default validateUser;