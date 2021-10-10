import React from 'react'
import { useSelector } from 'react-redux';
import { filterCategories } from '../functions/filterCategories';
import { levelData } from '../redux/slices/levelSlice';
import { themeData } from '../redux/slices/themeSlice';
import DisplayData from './DisplayData';

function RenderCategories() {
    const stageInfo = useSelector(levelData);
    const themeInfo = useSelector(themeData);

    return (
        <DisplayData 
            stage={stageInfo.stage}
            data={filterCategories(stageInfo.stage, themeInfo.themes)}
        />
    )
}

export default RenderCategories
