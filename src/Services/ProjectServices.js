import axios from 'axios'
import React, { Component } from 'react'
import { TOKEN } from '../Util/Setting'
import ServicesBaseAxios from './ServicesBaseAxios'

export class ProjectServices extends ServicesBaseAxios {
    getAllProject = () => {
        return this.GET('api/Project/getAllProject')
    }
    getProjectCategory = () => {
        return axios({
            method: 'get',
            url: 'https://jiranew.cybersoft.edu.vn/api/ProjectCategory',
            headers: {
                TokenCybersoft: TOKEN,
            }
        });
    }
    createProject = (data) => {
        this.POST('/api/Project/createProject', data);
    }
}

export const ProjectSer = new ProjectServices()
