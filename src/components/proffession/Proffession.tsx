import React from 'react'

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
    return (
        <div className="proffession">
            <h3>{data.name}</h3>
            <p>{data.info}</p>
        </div>
    )
}

export default Proffession
