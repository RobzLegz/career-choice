import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementLevel } from '../../../redux/slices/levelSlice';

function AddStageButton() {
    const dispatch = useDispatch();

    return (
        <button className="filter__back__option" onClick={() => dispatch(incrementLevel())}>Tālāk</button>
    )
}

export default AddStageButton
