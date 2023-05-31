import {INIT_CITY, CHENAGE_CITY} from '../constant';


export const initCity=(cityName) => ({type:INIT_CITY,cityName})


export const changeCity=(cityName) => ({type:CHENAGE_CITY,cityName})