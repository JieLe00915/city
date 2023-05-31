import {INIT_CITY, CHENAGE_CITY} from '../constant';

const initState={
    cityName:"重庆"
}

export default function city(preState=initState,action) {
        const {type,cityName}=action
        switch (type) {
            case INIT_CITY:
                return {
                    cityName:cityName
                };
            case CHENAGE_CITY:
                return {
                    cityName:cityName
                };

        
            default:
                return preState;
        }
}