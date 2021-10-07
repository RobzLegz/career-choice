import React from 'react'
import Stage1 from '../components/stages/Stage1';
import Stage2 from '../components/stages/Stage2';
import Stage3 from '../components/stages/Stage3';
import Stage4 from '../components/stages/Stage4';
import Stage5 from '../components/stages/Stage5';

interface Props {
    stage: number;
}

const RenderStage: React.FC<Props> = ({stage}) => {
    if(stage === 0){
        return <Stage1 />;
    }else if(stage === 1){
        return <Stage2 />;
    }else if(stage === 2){
        return <Stage3 />;
    }else if(stage === 3){
        return <Stage4 />;
    }else if(stage === 4){
        return <Stage5 />;
    }
    return null;
}

export default RenderStage