import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { UserReducer } from './Reducers/UserReducer.js'
import { ProjectReducer } from './Reducers/ProjectReducer'

const rootReducers = combineReducers({
    UserReducer,
    ProjectReducer: ProjectReducer,
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))