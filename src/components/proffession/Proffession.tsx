import React from 'react'
import { useSelector } from 'react-redux'
import { languageData } from './../../redux/slices/languageSlice';

interface Data{
    name: string;
    salary: string;
    info: string;
    tags: string[];
}

interface Props{
    data: Data;
}

const Proffession: React.FC<Props> = ({data}) => {
    const languageInfo = useSelector(languageData);

    return (
        <div className="proffession">
            <h3>{data.name}</h3>
            <p>{data.info}</p>
            <p>{languageInfo.text.find.position.salaryText}: {data.salary}€</p>
        </div>
    )
}

export default Proffession
