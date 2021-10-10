import React from 'react'
import { useSelector } from 'react-redux';
import Proffession from '../components/proffession/Proffession';
import { levelData } from '../redux/slices/levelSlice';
import { themeData } from '../redux/slices/themeSlice';

interface Props{
    professions: any;
}

const DisplayProffessions: React.FC<Props> = ({professions}) => {
    const stageInfo = useSelector(levelData);
    const themeInfo = useSelector(themeData);

    return (
        <div className="profession__container">
            {
                professions.map((profession: any, i: number) => {
                    return (
                        <Proffession 
                            key={i}
                            data={profession}
                        />
                    )
                })
            }
        </div>
    )
}

export default DisplayProffessions
