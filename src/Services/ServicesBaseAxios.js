import axios from 'axios';
import React, { Component } from 'react'
import { TOKEN, TOKEN_ND, URL } from '../Util/Setting';

export default class ServicesBaseAxios {
    GET = (url) => {
        return axios({
            method: 'get',
            url: `${URL}/${url}`,
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem(TOKEN_ND),
                TokenCybersoft: TOKEN,
            }
        });
    }
    POST = (url, data) => {
        return axios({
            method: 'post',
            url: `${URL}/${url}`,
            data: data,
            headers: {
                TokenCybersoft: TOKEN,
            }
        });
    }
}
