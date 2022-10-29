import React, { Component } from 'react'
import ServicesBaseAxios from './ServicesBaseAxios'

export class UserServices extends ServicesBaseAxios {
    singUp = (data) => {
        return this.POST("/api/Users/signup", data);
    }
    singIn = (data) => {
        return this.POST("api/Users/signin", data)
    }
}

export const UserSr = new UserServices();
