import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTheme } from '../../redux/slices/themeSlice';
import { themeData } from './../../redux/slices/themeSlice';

interface Props {
    data: any,
}

const Theme: React.FC<Props> = ({data}) => {
    const themeInfo = useSelector(themeData);
    
    const dispatch = useDispatch();

    return (
        <div className={themeInfo.themes.some((t: any) => t.name === data.name) ? "selected__theme theme" : "theme"} onClick={() => dispatch(addTheme(data))}>
            <h3>{data.name}</h3>
        </div>
    )
}

export default Theme
