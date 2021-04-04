import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://data.nantesmetropole.fr/`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

}
