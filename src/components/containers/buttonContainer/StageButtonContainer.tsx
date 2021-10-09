import React from 'react'
import AddStageButton from './AddStageButton';
import DecrementStageButton from './DecrementStageButton';

function StageButtonContainer() {
    return (
        <div className="filter__nextback__container">
            <DecrementStageButton />
            <AddStageButton />
        </div>
    )
}

export default StageButtonContainer
