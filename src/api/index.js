import axios from 'axios'

let base = '';

export  const getUserList = params => {return axios.get(`${base}/user`,{params}).then(res=>res.data)};

export  const mapDelete = params => {return axios.get(`${base}/user/delete`,{params}).then(res=>res.data)};

export  const getEdit = params => {return axios.get(`${base}/user/edit`,{params}).then(res=>res.data)};

export  const postAddUser = params => {return axios.post(`${base}/user/add`,{params}).then(res=>res.data)};

export  const requestLogin = params => {return axios.post(`${base}/login`,{params}).then(res=>res.data)};
