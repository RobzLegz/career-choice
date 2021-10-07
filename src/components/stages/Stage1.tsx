import React from 'react'
import DisplayData from '../../hooks/DisplayData';

const data = [
    {
        name: "test1"
    },
    {
        name: "test2"
    },
    {
        name: "test3"
    },
    {
        name: "test4"
    },
    {
        name: "test5"
    },
    {
        name: "test6"
    },
    {
        name: "test7"
    },
    {
        name: "test8"
    }
]

function Stage1() {
    return (
        <div>
            <div className="py-5">
                <h2>Izvēlieties lietas</h2>
            </div>
            <DisplayData 
                stage={1}
                data={data}
            />
        </div>
    )
}

export default Stage1
