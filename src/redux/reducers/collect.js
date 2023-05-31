import { COLLECT, UNCOLLECT } from '../constant'
import findIndex from "lodash/findIndex"
const defaultState = []
export default function collect(prestate = defaultState, action) {
    const { type, id } = action
    switch (type) {
        case COLLECT:
            return [...prestate, id];
        case UNCOLLECT:
            const currentIndex = findIndex(prestate, item => item ==id)
            return [
                ...prestate.splice(0, currentIndex),
                ...prestate.splice(currentIndex + 1),

            ];
            case 'CLEARCOLLECT':
                return [];

        default:
            return prestate;
    }

}