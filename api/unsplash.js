import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: "Client-ID w6tGllsilL_GLaqeqj-M2ww6d-DdT0G6J8ttw5_c01Y"
    }

})
