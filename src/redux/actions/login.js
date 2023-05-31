import { SET_LOGIN, OUT_LOGIN } from '../constant'
export function setLogin(user) {
    return {
        type:SET_LOGIN,
        user
    }
}
export const outLogin = () => {
    return {
        type:OUT_LOGIN,
        
    }
};
