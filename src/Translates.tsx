export enum Languages {
    EN = 'EN',
    RU = 'RU'
}

export const translations = {
    EN: {
        menu: {
            HOME: "Home",
            ABOUT: "About",
            CONTACT: "Contact",
        },
        about: {
            DEV: 'Developer',
            DEV_TEXT: [
                "Passionate about solving technical challenges and scripting away manual work.",
                "Always ready to improve my skills, additionally in DevOps.",
                "Former Frontend Engineer at Miro.",
                "Hobby: creating Telegram bots for fun!",
                "Skilled in TypeScript, React, and Node.js but open to exploring new tech stacks."
            ],
            QA_TEXT: [
                "Former Head of QA",
                "Passionate about delivering excellent quality efficiently, using modern tools and crafting solutions when none exist.",
                "Career highlights include leading QA efforts at a major bank, implementing efficient processes, training manual testers in coding, and raising testing standards.",
                "Experienced in manual testing, automation, and process optimization across various industries."
            ]
        },
        contacts: {
            HEADER: 'Contacts',
        }
    },
    RU: {
        menu: {
            HOME: "Главная",
            ABOUT: "Обо мне",
            CONTACT: "Контакты",
        },
        about: {
            DEV: "Разработчик",
            DEV_TEXT: [
                "Обожаю разбираться в сложных задачках и избавляться от рутины с помощью кода.",
                "Всегда готова прокачиваться, в том числе в DevOps!",
                "Ранее работала Frontend разработчицей в Miro.",
                "Для души создаю Telegram-ботов — это весело!",
                "Отлично дружу с TypeScript, React и Node.js, но с удовольствием попробую что-то новенькое."
            ],
            QA_TEXT: [
                "Была главным QA и руководила командой качества!",
                "Качество — моя страсть! Достигаю отличных результатов быстро, используя современные инструменты или создавая новые решения.",
                "Горжусь управлением QA в крупном банке, внедрением процессов, обучением коллег и улучшением стандартов тестирования.",
                "Опыт в ручном тестировании, автоматизации и оптимизации процессов в разных индустриях. Всегда на шаг впереди!"
            ]
        },
        contacts: {
            HEADER: 'Контакты'
        }
    },

};