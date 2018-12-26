import http from './http-service.js'

class AuthService {
    
    login(email,password) {
        return http.post('auth/login', {  //ruta na koju saljemo
            email,
            password
        }).then( ({ data }) => data)  //raspakovali response
        
    }

    register(first_name, last_name, email, password, password_confirmation, conditions) {
        return http.post('auth/register', {
            first_name, 
            last_name, 
            email, 
            password, 
            password_confirmation, 
            conditions   
        }).then( ({ data }) => data)
          .catch(error => error.response.data.errors) 
          
    }

    setAuthHeaders(token) {
        if(!token) {
            delete http.defaults.headers.common['Authorization']  //ako nema tokena izbrisi ga iz hedera
            return
        }
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`   //setovali smo token
    }

    
        // axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
        // .then(resp => {
        //   const token = resp.data.token
        //   const user = resp.data.user
}

const checkForInitialToken = (authService) => {
    const token = localStorage.getItem('token')
    if(token) {
        authService.setAuthHeaders(token)
    }
}

// const setLocalStorage = (authService) => {
//     localStorage.setItem('user', JSON.stringify(user)) 
//     localStorage.setItem('token', token)
//     authService.setAuthHeaders(token)
// }

const authService = new AuthService()
checkForInitialToken(authService)  //svaki put kad reloaduje provera da li ima token
//setLocalStorage(authService)
export default authService