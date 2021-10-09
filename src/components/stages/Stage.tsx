import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../../data/proffessions';
import DisplayData from '../../hooks/DisplayData';
import { decrementLevel, incrementLevel, levelData } from '../../redux/slices/levelSlice';

interface T{
    name: string;
    stage: number;
    info: string;
}

const Stage: React.FC = () => {
    const stageInfo = useSelector(levelData);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="py-5">
                <h2>Izvēlieties lietas</h2>
            </div>
            <DisplayData 
                stage={stageInfo.stage}
                data={categories.filter((t: T) => t.stage === stageInfo.stage)}
            />
            <div className="filter__nextback__container">
                <button className="filter__back__option" onClick={() => dispatch(decrementLevel())}>Atpakaļ</button>
                <button className="filter__next__option" onClick={() => dispatch(incrementLevel())}>Tālāk</button>
            </div>
        </div>
    )
}

export default Stage
