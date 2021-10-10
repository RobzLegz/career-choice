import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementStage } from '../../../functions/stageOptions';
import { levelData } from '../../../redux/slices/levelSlice';

function DecrementStageButton() {
    const dispatch = useDispatch();
    const stageInfo = useSelector(levelData);

    const [active, setActive] = useState(false);

    useEffect(() => {
        if(stageInfo.stage > 1){
            setActive(true);
        }else{
            setActive(false);
        }
    }, [stageInfo.stage]);

    if(active){
        return <button className={active ? "filter__back__option mr-5" : "filter__inactive__option"} onClick={() => decrementStage(dispatch, active)}>Atpakaļ</button>
    }
    return null
}

export default DecrementStageButton
