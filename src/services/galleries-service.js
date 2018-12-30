import http from './http-service.js'

class GalleriesService {
    getGalleries(id, page = 1) {
            return http.get('/galleries',  { params: { id, page }})
             .then(({ data }) => data)
    }
    
    getGallery(id) {
        return http.get(`/galleries/${id}`) 
            .then(({ data }) => data)
    }

    getMyGalleries(id, page = 1) {
        return http.get('/galleries', { params: {  id, page } }) 
            .then(({ data }) => data)
    }

    create({ title, description, images }) {
        return http.post('galleries', { 
            title, 
            description, 
            images
         })
    }

    getAuthorsGallery(id, page = 1) {
        return http.get(`/authors/${id}`, { params: { page }}) 
            .then(({ data }) => data)
    }
}

const galleriesService = new GalleriesService()
export default galleriesService