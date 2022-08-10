const messageAnime = {
    message: 'Buscar un Anime',
    messagePlaceholder: 'Buscar anime...'
}

const messageManga = {
    message: 'Buscar un Manga | Manhwa | Manhua',
    messagePlaceholder: 'Buscar manga...'
}

const animeManga = (e, anime) => {
    const { valor } = e.target.dataset;

    valor === 'anime' 
        ? anime.setBoolean(true) 
        : anime.setBoolean(false)
}


export {
    messageAnime,
    messageManga,
    animeManga
}