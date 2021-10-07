import React from 'react';

interface Props {
    data: any,
}

const Theme: React.FC<Props> = ({data}) => {
    return (
        <div>
            <h3>{data.name}</h3>
        </div>
    )
}

export default Theme
