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
        name: "Tēlotāj māksla",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 45,
        parent_id: 2,
    },
     {
        name: "Monumetālā glez.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 46,
        parent_id: 2,
    },
     {
        name: "Monumentāla tēlniec.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 47,
        parent_id: 2,
    },
     {
        name: "Kolāža",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 48,
        parent_id: 2,
    },
    {
        name: "Latviešu val.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 60,
        parent_id: 4,
    },
    {
        name: "Angļu val.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 61,
        parent_id: 4,
    },
    {
        name: "Krievu val.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 62,
        parent_id: 4,
    },
    {
        name: "Literatūra",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 63,
        parent_id: 4,
    },
     {
        name: "Basketbols",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 16,
        parent_id: 9,
    },  
      {
        name: "Volejbols",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 17,
        parent_id: 9,
    },    
      {
        name: "Florbols",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 18,
        parent_id: 9,
    },      {
        name: "Mākslas vingrošana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 19,
        parent_id: 9,
    }, 
    {
        name: "Karatē",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 20,
        parent_id: 10,
    },    
    {
        name: "Makšķerēšana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 21,
        parent_id: 10,
    },   
    {
        name: "Regbijs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 22,
        parent_id: 10,
    },     
    {
        name: "Golfs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 23,
        parent_id: 10,
    },    
    {
        name: "Džudo",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 24,
        parent_id: 10,
    },
    {
        name: "Kārclekšana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 25,
        parent_id: 11,
    },
    {
        name: "Tāllekšana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 26,
        parent_id: 11,
    },
     {
        name: "Mešana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 27,
        parent_id: 11,
    },
     {
        name: "Barjeras",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 28,
        parent_id: 11,
    },
     {
        name: "Sprints",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 29,
        parent_id: 11,
    },
     {
        name: "bokss",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 30,
        parent_id: 12,
    },
    {
        name: "Jauktās cīņas",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 31,
        parent_id: 12,
    },
    {
        name: "Aikido",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 32,
        parent_id: 12,
    },
    {
        name: "Sumo",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 33,
        parent_id: 12,
    },
    {
        name: "MMA",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 34,
        parent_id: 12,
    },
    {
        name: "Peldēšana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 35,
        parent_id: 13,
    },
    {
        name: "Niršana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 36,
        parent_id: 13,
    },
    {
        name: "Burāšana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 37,
        parent_id: 13,
    },
    {
        name: "Sērfošana",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 38,
        parent_id: 13,
    },
     {
        name: "Loks",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 40,
        parent_id: 14,
    },
    {
        name: "Šautriņas",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 41,
        parent_id: 14,
    },
    {
        name: "Biatlons",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 42,
        parent_id: 14,
    },
    {
        name: "Arbalets",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 43,
        parent_id: 14,
    },
    {
        name: "Grafiak",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 49,
        parent_id: 45,
    },
    {
        name: "Tēlniecība",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 50,
        parent_id: 45,
    },
    {
        name: "Glezniecība",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 51,
        parent_id: 45,
    },
    {
        name: "cilnis,reljefs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 52,
        parent_id: 45,
    },
    {
        name: "sīkplastika",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 53,
        parent_id: 45,
    },
    {
        name: "Mozaika",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 54,
        parent_id: 46,
    },
    {
        name: "freska",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 55,
        parent_id: 46,
    },
    {
        name: "Vitrāža",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 56,
        parent_id: 46,
    },
    {
        name: "Monumenti",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 57,
        parent_id: 47,
    },
    {
        name: "Piemineķļi",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 58,
        parent_id: 47,
    },
    {
        name: "Memoriālie akmeņi",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 59,
        parent_id: 47,
    },
    {
        name: "Gramatika",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 65,
        parent_id: 60,
    },
    {
        name: "sarun-valoda",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 66,
        parent_id: 60,
    },
     {
        name: "sarun-valoda",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 67,
        parent_id: 60,
    }

    
    
    
    
];

const proffessions = [
    {        name: "Proffession1", // Profesijas nosaukums piemēram Programmēšanas tehniķis
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
