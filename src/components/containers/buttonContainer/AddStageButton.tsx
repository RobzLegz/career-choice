import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementStage } from '../../../functions/stageOptions';
import { levelData } from '../../../redux/slices/levelSlice';
import { themeData } from '../../../redux/slices/themeSlice';

const AddStageButton = () => {
    const dispatch = useDispatch();
    const themeInfo = useSelector(themeData);
    const stageInfo = useSelector(levelData);

    const [active, setActive] = useState(false);

    useEffect(() => {
        if(themeInfo.themes.some((t: any) => t.stage === stageInfo.stage)){
            setActive(true);
        }else{
            setActive(false);
        }
    }, [themeInfo.themes, stageInfo.stage]);

    return <button className={active ? "filter__back__option" : "filter__inactive__option"} onClick={() => incrementStage(dispatch, active)}>Tālāk</button>
}

export default AddStageButton
