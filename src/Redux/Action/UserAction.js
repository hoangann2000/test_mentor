import { history } from "../../App";
import { SING_IN } from '../Type/UserType'
import { SING_UP } from '../Type/UserType'
import UserServices, { UserSr } from "../../Services/UserServices";

export const singUpAction = (data) => {
    return async (dispatch2) => {
        try {
            const result = await UserSr.singUp(data);
            dispatch2({
                type: SING_UP,
                dataSingUp: result.data.content
            })
            // console.log(result)
            alert('success');
            history.push('/singin')
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert(error.response.data.message
            )
        }
    }
}

export const singInAction = (data) => {
    return async (dispatch2) => {
        try {
            const result = await UserSr.singIn(data);
            // console.log(result)
            dispatch2({
                type: SING_IN,
                dataSingIn: result.data.content
            })
            alert('success');
            history.push('/getAllProject')
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert(error.response.data.message
            )
        }
    }
}

