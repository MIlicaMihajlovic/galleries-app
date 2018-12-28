import http from './http-service.js'

class GalleriesService {
    getGalleries(page = 1) {
            return http.get('/galleries',  { params: { page }})
             .then(({ data }) => data)
    }
    
    getGallery(id) {
        return http.get(`galleries/${id}`) //mora sve pod `` 
            .then(({ data }) => data)
    }

    getMyGalleries(id, page = 1) {
        return http.get('galleries', { params: { id, page } }) 
            .then(({ data }) => data)
    }

    create({ title, description, images }) {
        return http.post('galleries', { 
            title, 
            description, 
            images
         })
    }
}

const galleriesService = new GalleriesService()
export default galleriesService