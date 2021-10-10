import React from 'react'
import { useSelector } from 'react-redux';
import Proffession from '../components/proffession/Proffession';
import { languageData } from '../redux/slices/languageSlice';

interface Proffession{
    name: string;
    info: string;
    salary: string;
    tags: string[];
    accuracy: number;
    percentage: string;
}

interface Props{
    professions: Proffession[];
    setLoadMoreProfessions: any;
    loadMoreProfessions: boolean;
}

const DisplayProffessions: React.FC<Props> = ({professions, loadMoreProfessions, setLoadMoreProfessions}) => {
    const languageInfo = useSelector(languageData);

    return (
        <div className="profession__container">
            {professions.map((profession: any, i: number) => <Proffession key={i} data={profession}/>)}
            {!loadMoreProfessions && <button className="mt-5" onClick={() => setLoadMoreProfessions(true)}>{languageInfo.text.find.position.loadMore}</button>}
        </div>
    )
}

export default DisplayProffessions
