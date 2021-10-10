const supportedLanguages = [
    {
        language: "latvian",
        short: "LV",
        flag: "https://flagpedia.net/data/flags/w580/lv.png",
    },
    {
        language: "english",
        short: "EN",
        flag: "https://flagpedia.net/data/flags/w580/us.png",
    },
    {
        language: "russian",
        short: "RU",
        flag: "https://flagpedia.net/data/flags/w580/ru.png",
    },
];

const languages = {
    latvian: {
        global: {
            navigation: {
                links: {
                    link1: "Sākums",
                    link2: "Aptauja"
                }
            },
            footer: {
                pages: {
                    heading: "Lapas",
                    option1: "Sākums",
                    option2: "Aptauja"
                },
                media: {
                    heading: "Sociālie tīkli",
                    option1: "Instagram",
                    option2: "github"
                }
            }
        },
        home: {
            head: {
                title: "Karjera man | Sākums"
            },
            header: {
                heading: "Karjera man",
                subHeading: "Atrodi sev piemērotākās profesijas un karjeras iespējas"
            },
            cards: {
                card1: {
                    heading: "Kas ir karjera?",
                    text: "Karjera ir cilvēka mērķtiecīga darbība savu kompetenču (spēju, prasmju, zināšanu) pilnveidei un izpausmei mūža garumā. Karjeras veidošana ir nepārtraukts process, kura gaitā cilvēks izmanto informāciju par sevi un apkārtējo pasauli, analizē un pielieto to, lai izvēlētos savu nodarbošanās jomu un pēc tam jau konkrētu profesiju. Cilvēks pats piedalās savas dzīves (karjeras) veidošanā un plānošanā."
                },
                card2: {
                    heading: "Filtrācija",
                    text: "Mēs Jums uzdosim pāris jautājumus saistībā ar karjeru, un pēc atbilžu rezultātiem ar filtrācijas algoritma palīdzību atradīsim jums vispiemērotākās profesijas.",
                    button: "Veikt aptauju"
                },
                card3: {
                    heading: "Veiciet aptauju, lai atrastu sev piemērotāko profesiju",
                    button: "Aptauja"
                },
                card4: {
                    heading: "Drošība",
                    button: "Aptauja",
                    textPart1: "Jūsu dati netiks saglabāti, vai nodoti reklāmdevējiem, mūsu lapas mērķis ir izglītot bērnus un jauniešus par darba iespējām, kā arī piedāvāt atbilstošākās profesijas nāktonei. Mūsu aplikācijas",
                    link: "kods",
                    textPart2: "ir publiski pieejams un visiem redzams."
                },
            }
        },
        find: {
            head: {
                title: "Karjera man | Aptauja"
            },
            header: {
                heading: "Izvēlieties lietas",
                positionHeading: "Jums atlasītās profesijas"
            },
            buttonContainer: {
                backButton: "Atpakaļ",
                forwardButton: "Tālāk",
                finishButton: "Rezultāti",
            },
            position: {
                salaryText: "Vidējā alga",
                loadMore: "Ielādēt vēl",
                accuracyText: "atbilstība"
            }
        }
    },
}

export {languages, supportedLanguages}