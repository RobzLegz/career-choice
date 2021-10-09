import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementLevel } from '../../../redux/slices/levelSlice';

function DecrementStageButton() {
    const dispatch = useDispatch();

    return (
        <button className="filter__back__option" onClick={() => dispatch(decrementLevel())}>Atpakaļ</button>
    )
}

export default DecrementStageButton
