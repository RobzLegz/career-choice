## Contributors
 Markup : * Bullet list
              * Nested bullet
                  * Sub-nested bullet etc
          * Bullet list item 2

## Matching algorythm
```ts
const getProffessions = (selectedThemes: Theme[], setProfessions: any, loadMore: boolean) => {
    let dataScale: Proffession[] = [];
    for (let i = 0; i < proffessions.length; i++){
        let proffession = proffessions[i];
        let tags = proffession.tags;
        let accuracy = 0;
        for (let j = 0; j < tags.length; j++){
            let tag = tags[j];
            let accurate = selectedThemes.some((t: Theme) => t.name === tag);
            if(accurate){
                accuracy += 1;
            }
        }
        let percentage = Math.round((100 / selectedThemes.length) * accuracy).toString();
        let pushData = {
            name: proffession.name,
            info: proffession.info,
            salary: proffession.salary,
            tags: tags,
            accuracy: accuracy,
            percentage: percentage
        }
        dataScale.push(pushData)
    }
    dataScale.sort((a: Proffession, b: Proffession) => (b.accuracy - a.accuracy));
    if(!loadMore){
        setProfessions(dataScale.slice(0, 3));
    }else{
        setProfessions(dataScale);
    }
}
```
