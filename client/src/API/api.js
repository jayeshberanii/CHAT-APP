import axios from 'axios'
const instance=axios.create({
    baseURL:'http://localhost:8000/api'
})
//login user

export const loginUser=async(obj)=>{
    await instance.post('/users/login',obj)
    .then(res=>console.log(res))
}