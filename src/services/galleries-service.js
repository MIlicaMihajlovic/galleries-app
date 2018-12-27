import http from './http-service.js'

class GalleriesService {
    getGalleries(term = '', skip = 0, take = 10) {
        return http.get('/galleries', { params: { term, skip, take }})
             .then(({ data }) => data)
    }         
}

const galleriesService = new GalleriesService()
export default galleriesService