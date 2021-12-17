const API = window.location.hostname === 'localhost' || window.location.hostname === "127.0.0.1" ? 'http://localhost:4000' : 'https://backend-mi-lista.herokuapp.com';

export {
    API
}
