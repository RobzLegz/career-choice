import { proffessions } from "../data/proffessions";

const getProffessions = (selectedThemes: any[], setProfessions: any) => {
    for (let i = 0; i < proffessions.length; i++){
        let proffession = proffessions[i];

        console.log(proffession);

    }

    setProfessions(proffessions);
}

export {getProffessions};