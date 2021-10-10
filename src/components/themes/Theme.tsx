import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTheme } from '../../redux/slices/themeSlice';
import { themeData } from './../../redux/slices/themeSlice';

interface Props {
    data: T,
}

interface T{
    name: string;
    stage: number;
    info: string;
    id: number;
    parent_id: number | null;
}

const Theme: React.FC<Props> = ({data}) => {
    const themeInfo = useSelector(themeData);
    const dispatch = useDispatch();

    if(data){
        return (
            <div className={themeInfo.themes.some((t: T) => t.id === data.id) ? "selected__theme theme" : "theme"} onClick={() => dispatch(addTheme(data))}>
                <h3>{data.name}</h3>
            </div>
        )
    }
    return null;
}

export default Theme
