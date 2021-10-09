import React from 'react'
import { categories } from '../../data/proffessions';
import DisplayData from '../../hooks/DisplayData';


function Stage1() {
    return (
        <div>
            <div className="py-5">
                <h2>Izvēlieties lietas</h2>
            </div>
            <DisplayData 
                stage={1}
                data={categories.filter((t: any) => t.stage === 1)}
            />
        </div>
    )
}

export default Stage1
