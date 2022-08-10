const getPage = (link, page, animeCount) => {
    let tmpPage = page;
    const lastPage = Math.ceil(animeCount/10);
    
    switch (link) {
        case 'first':
            return tmpPage = 1
        case 'prev':
            return tmpPage > 1 ? tmpPage - 1 : page
        case 'next': 
            return tmpPage >= lastPage ? lastPage : tmpPage + 1 
        case 'last':
            return lastPage        
        default:
            break;
    }
}

export {
    getPage
}