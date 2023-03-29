import React from 'react'
import axios from 'axios'
import process from 'process'

const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_BASEURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance
