import {FREE_LANCES} from './free-lance-projects'
import {LATEST_PROJECTS} from './latest-projects'
import {WORK_EXPERIENCES} from './work-experiences'

const oldTechs = [
    'jQuery',
    'Bootstrap',
    'Templates',
    'Webpack',
    'NPM',
    'MongoDb',
    'Mongoose',
    'TypeOrm',
    'MEAN',
    'MERN',
    'MySQL',
    'MailGun',
    'Twillio',
    'REST',
    'CronJobs',
    'Sockets',
    'Xaamp',
    'Filezilla',
    'ORM',
    'MVC',
    'C++',
    'C#',
    'OOP',
    'Arduino',
    'Raspberry Pi',
    'UML’s',
    'Java',
    'Vb.net',
    'IoT',
    'Electron',
    'Nginx',
    'Docker',
]

export const TECHNOLOGIES_USED = [
    ...[
        ...new Set([
            ...FREE_LANCES.reduce(
                (badges, project) => badges.concat(project.badges),
                [],
            ),
            ...LATEST_PROJECTS.reduce(
                (badges, project) => badges.concat(project.badges),
                [],
            ),
            ...WORK_EXPERIENCES.reduce(
                (badges, project) => badges.concat(project.badges),
                [],
            ),
            ...oldTechs,
        ]),
    ].filter((v) => !v.toLowerCase().includes('angular')),
    'Angular',
].sort((a, b) => a.localeCompare(b))
