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
        name: "It māksla",
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
        name: "Mūzika",
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
        name: "Literatūra",
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
        name: "Valodas",
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
        name: "It sfērā",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 90,
        parent_id: 3,
    },
     {
        name: "Biznesā",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 91,
        parent_id: 3,
    },
    {
        name: "Zinātnē",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 92,
        parent_id: 5,
    },
    {
        name: "Radošums",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 111,
        parent_id: 3,
    },
     {
        name: "Fizisks darbs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 112,
        parent_id: 3,
    },
     {
        name: "Atbildība",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 113,
        parent_id: 3,
    },
     {
        name: "Bizness",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 2,
        id: 114,
        parent_id: 3,
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
        name: "Peldētājs",
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
        name: "Nirējs",
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
        name: "Ilustrātors",
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
        name: "Mākslinieks",
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
        name: "Arhitekts",
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
        name: "Kaligrāfs",
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
        name: "Karikatūrists",
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
        name: "Mākslas skolotājs",
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
        name: "Fotogrāfs",
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
        name: "Grafiskais dizainers",
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
        name: "front-end izstrādātājs",
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
        name: "Mūziķis",
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
        name: "Komponists",
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
        name: "Dziedātājs/a",
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
        name: "Dīdžejs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 70,
        parent_id: 47,
    },
    {
        name: "Latviešu val.skol.",
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
        name: "Orators",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 67,
        parent_id: 60,
    },
    {
        name: "Filazofs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 73,
        parent_id: 60,
    },
    {
        name: "Deputāts",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 74,
        parent_id: 60,
    },
    {
        name: "Lietvedis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 75,
        parent_id: 60,
    },
    {
        name: "Orators",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 76,
        parent_id: 60,
    },
    {
        name: "Programmētājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 77,
        parent_id: 61,
    },
    {
        name: "Grāmatvedis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 78,
        parent_id: 61,
    },
    {
        name: "Administrātors",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 79,
        parent_id: 61,
    },
    {
        name: "Projektu vadītājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 80,
        parent_id: 61,
    },
    {
        name: "Raksnieks",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 81,
        parent_id: 62,
    },
    {
        name: "Dzejnieks",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 872,
        parent_id: 62,
    },
    {
        name: "Redaktors",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 883,
        parent_id: 62,
    },
    {
        name: "Lit. kritiķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 893,
        parent_id: 62,
    },
    {
        name: "Redaktors",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 83,
        parent_id: 62,
    },
    {
        name: "Raksnieks",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 84,
        parent_id: 62,
    },
    {
        name: "Tulkotājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 85,
        parent_id: 63,
    },
    {
        name: "Privāt skolotājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 86,
        parent_id: 63,
    },
    {
        name: "Žurnālists",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 87,
        parent_id: 63,
    },
    {
        name: "Mārketings",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 88,
        parent_id: 63,
    },
    {
        name: "Programmētājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 95,
        parent_id: 90,
    },
    {
        name: "Programmētājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 96,
        parent_id: 90,
    },
    {
        name: "Datorspēļu dizai.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 97,
        parent_id: 90,
    },
    {
        name: "Meterologs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 98,
        parent_id: 90,
    },
    {
        name: "Inženieris",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 99,
        parent_id: 90,
    },
    {
        name: "Ekanomists",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 100,
        parent_id: 91,
    },
    {
        name: "Statistiķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 101,
        parent_id: 91,
    },
    {
        name: "finanču analītiķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 102,
        parent_id: 91,
    },
    {
        name: "Programmētājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 103,
        parent_id: 91,
    },
    {
        name: "Apdrošināšanas spec.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 104,
        parent_id: 91,
    },
    {
        name: "Apdrošināšanas spec.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 105,
        parent_id: 91,
    },
    {
        name: "Matemātiķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 106,
        parent_id: 92,
    },
     {
        name: "Auditors",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 107,
        parent_id: 92,
    },
     {
        name: "Pētnieks",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 108,
        parent_id: 92,
    },
     {
        name: "Kriptogrāfs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 109,
        parent_id: 92,
    },
    {
        name: "galdnieks",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 116,
        parent_id: 111,
    },
    {
        name: "Virpotājs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 117,
        parent_id: 111,
    },
    {
        name: "Kalējs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 118,
        parent_id: 111,
    },
    {
        name: "Stiklpūtējs",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 119,
        parent_id: 111,
    },
    {
        name: "Apkopēja",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 120,
        parent_id: 112,
    },
    {
        name: "Kasiere",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 121,
        parent_id: 112,
    },
    {
        name: "Elektriķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 122,
        parent_id: 112,
    },
     {
        name: "Automehāniķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 123,
        parent_id: 112,
    },
     {
        name: "Inženierkomunikācij tehniķis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 124,
        parent_id: 112,
    },
     {
        name: "Viesmīlis",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 125,
        parent_id: 113,
    },
     {
        name: "Klientu apkal.spe.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 126,
        parent_id: 113,
    },
    {
        name: "Klientu apkal.spe.",
        translate: {
            lv: "Sports",
            en: "Sport",
            ru: "Sport"
        },
        info: "Just a test",
        stage: 3,
        id: 126,
        parent_id: 113,
    },
   

    
    
    
    
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
