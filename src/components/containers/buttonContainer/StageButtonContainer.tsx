import React from 'react'
import { useSelector } from 'react-redux';
import AddStageButton from './AddStageButton';
import DecrementStageButton from './DecrementStageButton';
import { levelData } from './../../../redux/slices/levelSlice';

function StageButtonContainer() {
    const stageInfo = useSelector(levelData);

    if(stageInfo.stage !== 4){
        return (
            <div className="filter__nextback__container">
                <DecrementStageButton />
                <AddStageButton />
            </div>
        )
    }
    return null;
}

export default StageButtonContainer
