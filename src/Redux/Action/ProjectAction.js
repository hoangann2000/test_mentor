import { useState } from 'react';
import GetAllProject from '../../Page/GetAllProject/GetAllProject';
import { ProjectSer } from '../../Services/ProjectServices'
import { GET_CA } from '../Type/ProjectType'

export const gettAllProjectAction = (setProject) => {
    return async () => {
        try {
            const result = await ProjectSer.getAllProject();
            console.log(result);
            setProject(result.data.content)
        } catch (error) {
            console.log(error)
            alert('not ok')
        }
    }
}

export const getProjectCategoryAction = () => {
    return async (dispatch2) => {
        try {
            const result = await ProjectSer.getProjectCategory();
            // console.log(result);
            dispatch2({
                type: GET_CA,
                ArrCategory: result.data.content
            })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
}

export const createProjectAction = (data) => {
    return async (dispatch2) => {
        try {
            const result = await ProjectSer.createProject(data);
            alert('Success')
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
}

