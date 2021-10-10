import { categories } from "../data/proffessions";

interface D{
    name: string;
    stage: number;
    info: string;
    id: number;
    parent_id: number | null;
}

const filterCategories = (currentStage: number, selectedThemes: D[]) => {
    let stageFiltered: D[] = [];

    categories.filter(c => c.stage === currentStage).forEach((theme: D) => {
        if(!theme.parent_id){
            stageFiltered.push(theme);
        }else if(selectedThemes.some((t: D) => t.id === theme.parent_id)){
            stageFiltered.push(theme);
        }
    })

    return stageFiltered
}

export {filterCategories};