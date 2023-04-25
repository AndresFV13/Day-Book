import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://curso-de-vuex-default-rtdb.firebaseio.com'
})


export default journalApi