import React from 'react'
import { useSelector } from 'react-redux'
import { languageData } from './../../redux/slices/languageSlice';

interface Data{
    name: string;
    info: string;
    salary: string;
    tags: string[];
    accuracy: number;
    percentage: string;
}

interface Props{
    data: Data;
}

const Proffession: React.FC<Props> = ({data}) => {
    const languageInfo = useSelector(languageData);

    return (
        <div className="proffession">
            <div className="proffession__header">
                <h3>{data.name}</h3>
                <span>{data.percentage}% {languageInfo.text.find.position.accuracyText}</span>
            </div>
            <p>{data.info}</p>
            <p>{languageInfo.text.find.position.salaryText}: {data.salary}€</p>
        </div>
    )
}

export default Proffession
