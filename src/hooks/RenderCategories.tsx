import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { filterCategories } from '../functions/filterCategories';
import { getProffessions } from '../functions/getFoundProffessions';
import { levelData } from '../redux/slices/levelSlice';
import { themeData } from '../redux/slices/themeSlice';
import DisplayData from './DisplayData';
import DisplayProffessions from './DisplayProffessions';

function RenderCategories() {
    const stageInfo = useSelector(levelData);
    const themeInfo = useSelector(themeData);

    const [professions, setProfessions] = useState([]);
    const [loadMoreProfessions, setLoadMoreProfessions] = useState(false);

    useEffect(() => {
        if(stageInfo.stage === 4){
            getProffessions(themeInfo.themes, setProfessions, loadMoreProfessions);
        }
    }, [stageInfo.stage, loadMoreProfessions])

    if(stageInfo.stage === 4){
        return (
            <DisplayProffessions 
                professions={professions}
                loadMoreProfessions={loadMoreProfessions}
                setLoadMoreProfessions={setLoadMoreProfessions}
            />
        )
    }else{
        return (
            <DisplayData 
                stage={stageInfo.stage}
                data={filterCategories(stageInfo.stage, themeInfo.themes)}
            />
        )
    }   
}

export default RenderCategories
