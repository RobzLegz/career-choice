import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementStage } from '../../../functions/stageOptions';
import { languageData } from '../../../redux/slices/languageSlice';
import { levelData } from '../../../redux/slices/levelSlice';
import { themeData } from '../../../redux/slices/themeSlice';

const AddStageButton = () => {
    const dispatch = useDispatch();
    const themeInfo = useSelector(themeData);
    const stageInfo = useSelector(levelData);
    const languageInfo = useSelector(languageData);

    const [active, setActive] = useState(false);

    useEffect(() => {
        if(themeInfo.themes.some((t: any) => t.stage === stageInfo.stage)){
            setActive(true);
        }else{
            setActive(false);
        }
    }, [themeInfo.themes, stageInfo.stage]);

    return <button className={active ? "filter__back__option" : "filter__inactive__option"} onClick={() => incrementStage(dispatch, active)}>{stageInfo.stage === 4 ? languageInfo.text.find.buttonContainer.finishButton : languageInfo.text.find.buttonContainer.forwardButton}</button>
}

export default AddStageButton
