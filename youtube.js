import axios from 'axios'

const  KEY ='AIzaSyAEhXhHNpugpixG7VZjzudutqld-oV0g7w'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params :{
        part :'snippet',
        maxResults :5,
        key :KEY,

    }
})

