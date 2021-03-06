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
    english: { //Strādā jopptvai
        global: {
            navigation: {
                links: {
                    link1: "Home",
                    link2: "Survey"
                }
            },
            footer: {
                pages: {
                    heading: "Pages",
                    option1: "Home",
                    option2: "Survey"
                },
                media: {
                    heading: "Social Network",
                    option1: "Instagram",
                    option2: "github"
                }
            }
        },
        home: {
            head: {
                title: "Career for me | Home"
            },
            header: {
                heading: "Career for me",
                subHeading: "Find the most suitable profession and career opportunities for you"
            },
            cards: {
                card1: {
                    heading: "What is career?", 
                    text: "Career is man porposeful activity their competencies (abilities, skills, knowledge) for devlopment and expression throughout life. Career building is a continuous process in which a person use information about himself and the world around him, analyzes and applies it to choose his or her field of occupation and then already a particular profession. Man himself participates in building and planning his own life (career)."
                },
                card2: {
                    heading: "Filtration",
                    text: "We will ask you a few questions related to career, and based on the results of the answers, we will use the filtring algorithm to find the most suitable professions for you.",
                    button: "Survey"
                },
                card3: {
                    heading: "Do a survey, to find the most suitable profession for yourself",
                    button: "Survey"
                },
                card4: {
                    heading: "Security",
                    button: "Survey",
                    textPart1: "Your data will not be stored or passed on to advertisers, our page aims to educate children and teens about job opportunities, and to offer the right profession for the future. Our application",
                    link: "code",
                    textPart2: "is publicly available and visible to everyone."
                },
            }
        },
        find: {
            head: {
                title: "Carrer for me | Survey"
            },
            header: {
                heading: "Choose what you like to do",
                positionHeading: "Your selected professions"
            },
            buttonContainer: {
                backButton: "Back",
                forwardButton: "Next",
                finishButton: "Results",
            },
            position: {
                salaryText: "Avarge salary",
                loadMore: "Load more",
                accuracyText: "Conformity"
            }
        }
    },
    russian: {
        global: {
            navigation: {
                links: {
                    link1: "Начало",
                    link2: "Опрос"
                }
            },
            footer: {
                pages: {
                    heading: "страницы",
                    option1: "Начало",
                    option2: "Опрос"
                },
                media: {
                    heading: "Социальные сети",
                    option1: "инстеграм",
                    option2: "гитхаб"
                }
            }
        },
        home: {
            head: {
                title: "Карьера для меня | Начало"
            },
            header: {
                heading: "Карьера для меня",
                subHeading: "Найдите наиболее подходящую для вас профессию и возможности карьерного роста"
            },
            cards: {
                card1: {
                    heading: "Что такое карьера?",
                    text: "Карьера - целенаправленная деятельность человека для совершенствования и проявления своей компетенции (способностей, умений, знаний) на протяжении всей жизни. Формирование карьеры является непрерывным процессом, в ходе которого человек использует информацию о себе и окружающем мире, анализирует и применяет его, чтобы выбрать сферу своего занятий и затем уже определенную профессию. Человек сам участвует в формировании и планировании своей жизни (карьеры)."
                },
                card2: {
                    heading: "фильтрация",
                    text: "Мы зададим вам несколько вопросов, связанных с карьерой, и по результатам ответов с помощью алгоритма фильтрации найдем наиболее подходящие профессии.",
                    button: "Провести опрос"
                },
                card3: {
                    heading: "Проведите опрос, чтобы найти подходящую профессию",
                    button: "опрос"
                },
                card4: {
                    heading: "безопасность",
                    button: "опрос",
                    textPart1: "Ваши данные не будут сохранены или переданы рекламодателям, цель нашей страницы - образование детей и подросткам о возможностях работы, а также предлагать подходящую профессию. Наши приложения",
                    link: "код",
                    textPart2: "общедоступен и виден всем."
                },
            }
        },
        find: {
            head: {
                title: "Карьера для меня | Опрос"
            },
            header: {
                heading: "Выбери вещи",
                positionHeading: "Выбранные для вас профессии"
            },
            buttonContainer: {
                backButton: "Назад",
                forwardButton: "вперед",
                finishButton: "результаты",
            },
            position: {
                salaryText: "Средняя зарплата",
                loadMore: "Скачать еще",
                accuracyText: "соответствие"
            }
        }
    },
}

export {languages, supportedLanguages}
