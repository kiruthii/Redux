import {configureStore} from '@reduxjs/toolkit';
import { userDetailsSlice } from './slice';

export const store=configureStore({
    reducer:{
        userDetails:userDetailsSlice.reducer

    }

})