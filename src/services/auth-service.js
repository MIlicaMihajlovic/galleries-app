import http from './http-service.js'

class AuthService {
    
    login(email,password) {
        return http.post('/auth/login', {  //ruta na koju saljemo
            email,
            password
        }).then( ({ data }) => data)  //raspakovali response
    }

    setAuthHeaders(token) {
        if(!token) {
            delete http.defaults.headers.common['Authorization']  //ako nema tokena izbrisi ga iz hedera
            return
        }
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`   //setovali smo token
    }

}

const checkForInitialToken = (authService) => {
    const token = localStorage.getItem('token')
    if(token) {
        authService.setAuthHeaders(token)
    }
}

const authService = new AuthService()
checkForInitialToken(authService)  //svaki put kad reloaduje provera da li ima token
export default authService