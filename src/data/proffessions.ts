const categories = [
    {
        name: "Sports",
        info: "",
        stage: 1,
        id: 1,
        parent_id: null
    },
    {
        name: "Māksla",
        info: "",
        stage: 1,
        id: 2,
        parent_id: null
    },
    {
        name: "Matemātika",
        info: "",
        stage: 1,
        id: 3,
        parent_id: null
    },
    {
        name: "Valodas",
        info: "",
        stage: 1,
        id: 4,
        parent_id: null
    },
    {
        name: "Mājturība",
        info: "Praktiska darbošanās",
        stage: 1,
        id: 5,
        parent_id: null
    },
    {
        name: "Datorika",
        info: "Darbs ar datoru",
        stage: 1,
        id: 6,
        parent_id: null
    },
    {
        name: "Kulinārija",
        info: "Darbs ar ēdienu",
        stage: 1,
        id: 7,
        parent_id: null
    },
    {
        name: "Zooloģija",
        info: "Darbs ar dzīvniekiem",
        stage: 1,
        id: 8,
        parent_id: null
    },
    {
        name: "Test",
        info: "Just a test",
        stage: 2,
        id: 9,
        parent_id: 1,
    },
    {
        name: "Test1",
        info: "Just a test",
        stage: 2,
        id: 10,
        parent_id: 1,
    },
    {
        name: "Test2",
        info: "Just a test",
        stage: 2,
        id: 11,
        parent_id: 1,
    },
    {
        name: "Test3",
        info: "Just a test",
        stage: 2,
        id: 12,
        parent_id: 1,
    },
    {
        name: "Test4",
        info: "Just a test",
        stage: 2,
        id: 13,
        parent_id: 1,
    },
    {
        name: "Test5",
        info: "Just a test",
        stage: 2,
        id: 14,
        parent_id: 1,
    },
    {
        name: "Test6",
        info: "Just a test",
        stage: 2,
        id: 15,
        parent_id: 1,
    },
    {
        name: "Test7",
        info: "Just a test",
        stage: 2,
        id: 16,
        parent_id: 1,
    },
    {
        name: "Test8",
        info: "Just a test",
        stage: 2,
        id: 17,
        parent_id: 1,
    },
    {
        name: "Testss",
        info: "Just a test",
        stage: 3,
        id: 18,
        parent_id: 15,
    },
    {
        name: "Test16",
        info: "Just a test",
        stage: 3,
        id: 19,
        parent_id: 15,
    },
    {
        name: "Test17",
        info: "Just a test",
        stage: 3,
        id: 20,
        parent_id: 14,
    },
    {
        name: "Test20",
        info: "Just a test",
        stage: 3,
        id: 21,
        parent_id: 14,
    }
];

const proffessions = [
    {
        name: "Proffession1", // Profesijas nosaukums piemēram Programmēšanas tehniķis
        info: "some info about proffession", // Informācija par profesiju (pienākumi, darba apstākļi u.t.t.)
        tags: [
            "Test20"
        ], // Pēc kādām kategorijām atpazīs šo profesiju
        salary: "500" // Vidējais atalgojums
    },
    {
        name: "Proffession2",
        info: "some info about proffession",
        tags: [
            "Testss",
            "Test17"
        ],
        salary: "100"
    },
];

export {categories, proffessions};