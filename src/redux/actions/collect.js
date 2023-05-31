import {COLLECT,UNCOLLECT} from '../constant'
export function setCollect(id) {
    return {
        type:COLLECT,
        id   
     }
}

export function removeCollect(id) {
    return {
        type:UNCOLLECT,
        id
    }
}

export function cleatCollect() {
    return {
        type:'CLEARCOLLECT',
        
    }
}