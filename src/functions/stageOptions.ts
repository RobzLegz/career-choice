import { decrementLevel, incrementLevel } from "../redux/slices/levelSlice";

const incrementStage = (dispatch: any, active: boolean) => {
    if(active){
        dispatch(incrementLevel());
    }
}

const decrementStage = (dispatch: any, active: boolean) => {
    if(active){
        dispatch(decrementLevel());
    }
}

export {incrementStage, decrementStage};