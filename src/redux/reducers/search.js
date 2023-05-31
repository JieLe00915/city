import {UPDATE_SEARCH} from '../constant'
const defaultState={
    search:''
}
export default function search(prestate=defaultState,action) {
    const {type,search}=action
    switch (type) {
        case UPDATE_SEARCH:
            return {
                search:search
            }
        default:
            return prestate;
    }
}
