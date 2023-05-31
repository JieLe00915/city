import { SET_LOGIN, OUT_LOGIN } from '../constant'
const defaultState = {
    user:{
        token: '',
        nick: ''
    }
  
}
export default function login(prestate = defaultState, action) {
    const { type, user } = action
    switch (type) {
        case SET_LOGIN:
            return {
                user: user
            }
        case OUT_LOGIN:
            return {
                user:{
                    token: '',
                    nick: ''
                }
            }
        default:
           return prestate;
    }
}