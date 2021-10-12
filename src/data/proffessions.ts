const categories = [
    {
        name: "Sports",// Kategorijas nosaukums
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "",// informācija par kategoiju
        stage: 1, // aptaujas stadija max - 3
        id: 1, // kategorijas id - katram jābūt unikālam (nedrikst būt vienādi ID)
        parent_id: null //ID, kas pieder kategorijai no iepriekšējās aptaujas stadijas
    },
    {
        name: "Māksla",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "",
        stage: 1,
        id: 2,
        parent_id: null
    },
    {
        name: "Matemātika",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "",
        stage: 1,
        id: 3,
        parent_id: null
    },
    {
        name: "Valodas",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "",
        stage: 1,
        id: 4,
        parent_id: null
    },
    {
        name: "Mājturība",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Praktiska darbošanās",
        stage: 1,
        id: 5,
        parent_id: null
    },
    {
        name: "Datorika",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Darbs ar datoru",
        stage: 1,
        id: 6,
        parent_id: null
    },
    {
        name: "Kulinārija",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Darbs ar ēdienu",
        stage: 1,
        id: 7,
        parent_id: null
    },
    {
        name: "Zooloģija",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Darbs ar dzīvniekiem",
        stage: 1,
        id: 8,
        parent_id: null
    },
    {
        name: "Komandu sports",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 9,
        parent_id: 1,
    },
    {
        name: "Individuāls sports",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 10,
        parent_id: 1,
    },
    {
        name: "Vieglatlētika",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 11,
        parent_id: 1,
    },
    {
        name: "Cīņas sports",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 12,
        parent_id: 1,
    },
    {
        name: "Ūdens sports",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 13,
        parent_id: 1,
    },
    {
        name: "Šaušanas sports",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 14,
        parent_id: 1,
    },
    {
        name: "Testss",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 18,
        parent_id: 15,
    },
    {
        name: "Test16",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 19,
        parent_id: 15,
    },
    {
        name: "Test17",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 20,
        parent_id: 14,
    },
    {
        name: "Test20",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
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
    {
        name: "Labākā profesija",
        info: "some info about proffession",
        tags: [
            "Matemātika",
        ],
        salary: "100"
    },
    {
        name: "Mašīna",
        info: "some info about proffession",
        tags: [
            "Māksla",
        ],
        salary: "100"
    },
    {
        name: "Latvietis",
        info: "some info about proffession",
        tags: [
            "Sports",
            "Testss",
            "Test17"
        ],
        salary: "100"
    },
    {
        name: "Proffession2",
        info: "some info about proffession",
        tags: [
            "Test16",
            "Testss",
            "Test17"
        ],
        salary: "100"
    }
];

export {categories, proffessions};
