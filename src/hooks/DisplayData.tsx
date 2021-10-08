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
            if(data.length === 2){
                setVarian("two_elements")
            }else if(data.length === 1){
                setVarian("one_element")
            }else if(data.length % 2 === 0){
                setVarian("even");
            }else if(data.length % 2 === 1){
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
    }else if(variant === "two_elements"){
        return (
            <div className="theme__container">
                <div className="theme__container__themes">
                    {
                        data.map((d: any, i: number) => {
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
    }else if(variant === "one_element"){
        return (
            <div className="theme__container">
                <Theme 
                    data={data[0]}
                />
            </div>
        )
    }
    return null;
}

export default DisplayData
