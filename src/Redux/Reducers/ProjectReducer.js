import userEvent from "@testing-library/user-event"
import { TOKEN_ND, USER_ND } from "../../Util/Setting";
import { GET_CA } from "../Type/ProjectType";
import { SING_IN, SING_UP } from "../Type/UserType";

const initialState = {
    ArrCategory: []
}

export const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CA:
            state.ArrCategory = action.ArrCategory
            return { ...state }
        default:
            return state
    }
}
