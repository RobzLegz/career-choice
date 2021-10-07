import React, { useEffect, useState } from 'react'
import Theme from '../components/themes/Theme';

interface Props{
    data: any;
    stage: number;
};

const DisplayData: React.FC<Props> = ({data, stage}) => {
    const [variant, setVarian] = useState("");

    useEffect(() => {
        if(variant === ""){
            if(data.length % 2 === 0){
                setVarian("even");
            }else{
                setVarian("odd");
            }
        }
    }, [data.length, variant]);

    if(variant === "even"){
        return (
            <div className="theme__container">
                <Theme 
                    data={data[0]}
                />

                <div className="theme__container__themes">
                    {
                        data.slice(1, data.length - 1).map((d: any, i: number) => {
                            return (
                                <Theme 
                                    key={i}
                                    data={d}
                                />
                            )
                        })
                    }
                </div>

                <Theme 
                    data={data[data.length - 1]}
                />
            </div>
        )
    }else if(variant === "odd"){
        return (
            <div className="theme__container">
                <Theme 
                    data={data[0]}
                />
                <div className="theme__container__themes">
                    {
                        data.slice(1, data.length).map((d: any, i: number) => {
                            return (
                                <Theme 
                                    key={i}
                                    data={d}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return null;
}

export default DisplayData
