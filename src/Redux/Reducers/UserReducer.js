import userEvent from "@testing-library/user-event"
import { TOKEN_ND, USER_ND } from "../../Util/Setting";
import { SING_IN, SING_UP } from "../Type/UserType";

let user = null;
if (localStorage.getItem(USER_ND)) {
    user = JSON.parse(localStorage.getItem(USER_ND))
}
const initialState = {
    UserLogin: user,
    thongTinND: {},
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SING_IN:
            state.UserLogin = action.dataSingIn
            localStorage.setItem(USER_ND, JSON.stringify(action.dataSingIn))
            localStorage.setItem(TOKEN_ND, action.dataSingIn.accessToken)
            return { ...state }
        case SING_UP:
            state.thongTinND = action.dataSingIn
            return { ...state }
        default:
            return state
    }
}
