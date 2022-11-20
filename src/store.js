import {reactive} from "vue";

export const store = reactive({
    baseURL: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv',
        popular: 'movie/popular'
    },

    params: {
        api_key: '63f4e64703771045ee9d77c590e22712',
        language: 'it-IT',
        query: ''
    },
    

    movie: [],
    tv: [],
    polular: [],

    
});