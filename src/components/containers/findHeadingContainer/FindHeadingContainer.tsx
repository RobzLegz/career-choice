import React from 'react'
import { useSelector } from 'react-redux';
import { languageData } from '../../../redux/slices/languageSlice';
import { levelData } from './../../../redux/slices/levelSlice';

function FindHeadingContainer() {
    const languageInfo = useSelector(languageData);
    const stageInfo = useSelector(levelData);

    return (
        <div className="py-5">
            <h2>{stageInfo.stage === 4 ?languageInfo.text.find.header.positionHeading  : languageInfo.text.find.header.heading}</h2>
        </div>
    )
}

export default FindHeadingContainer
