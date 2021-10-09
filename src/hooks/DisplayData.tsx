import React, { useEffect, useState } from 'react'
import Theme from '../components/themes/Theme';

interface Props{
    data: D[];
    stage: number;
};

interface D{
    name: string;
    stage: number;
    info: string;
}


const DisplayData: React.FC<Props> = ({data, stage}) => {
    const [variant, setVariant] = useState("");
    const [prevStage, setPrevStage] = useState(1);

    useEffect(() => {
        if(stage === prevStage){
            if(variant === ""){
                if(data.length === 0){
                    setVariant("none")
                }else if(data.length === 2){
                    setVariant("two_elements")
                }else if(data.length === 1){
                    setVariant("one_element")
                }else if(data.length % 2 === 0){
                    setVariant("even");
                }else if(data.length % 2 === 1){
                    setVariant("odd");
                }
            }
        }else{
            setPrevStage(stage);
            setVariant("")
        }
    }, [data.length, variant, stage, prevStage]);

    if(variant === "even"){
        return (
            <div className="theme__container">
                <Theme 
                    data={data[0]}
                />

                <div className="theme__container__themes">
                    {
                        data.slice(1, data.length - 1).map((d: D, i: number) => {
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
                        data.slice(1, data.length).map((d: D, i: number) => {
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
                        data.map((d: D, i: number) => {
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
