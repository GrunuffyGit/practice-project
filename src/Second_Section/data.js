import topstory1 from '../images/topstory1.png';
import topstory2 from '../images/topstory2.png';
import topstory3 from '../images/topstory3.png';
import topstory4 from '../images/topstory4.png';
import topstory5 from '../images/topstory5.png';

export const stories = [
    {
        type: 'regular',
        image: topstory1,
        description: `Baldur's Gate 3 Review: "A new gold standard for RPGs`,
        header: 'reviews',
        headerLink: '/',
        footer: {
            author: 'gameradar',
            timePosted: '4:30 PM PST',
            numberOfComments: 10,
        },
        link: 'https://www.gamesradar.com/baldurs-gate-3-review/'
    },
    {
        type: 'regular',
        image: topstory2,
        description: `Baldur's Gate 3 is the perfect couples' game `,
        header: 'microsoft',
        headerLink: '/',
        footer: {
            author: 'polygon',
            timePosted: '9:30 PM PST',
            numberOfComments: 1,
        },
        link: 'https://www.polygon.com/23827294/baldurs-gate-3-couples-game'
    },
    {
        type: 'regular',
        image: topstory3,
        description: `Where to find Halsin the druid in Baldur's Gate 3`,
        header: 'gadgets',
        headerLink: '/',
        footer: {
            author: 'pcgamer',
            timePosted: '4:30 PM PST',
            numberOfComments: 6,
        },
        link: 'https://www.pcgamer.com/baldurs-gate-3-find-halsin/'
    },
    {
        type: 'video',
        videoLink: 'https://www.youtube.com/embed/qRdrjsuc7uw?si=OtEDOWbx1clEtGge',
        firstSentence: 'Another trailer for Contra: Operation Galuga.',
        description: `The upcoming game puts a modern spin on the classic run ‘n’ gun,
         with its latest trailer highlighting the roster of playable characters and some revamped maps. 
         Contra: Operation Galuga comes from Konami and WayForward,
           and will be available for the Nintendo Switch, Xbox, PS5, PS4, and PC in “early” 2024.`,
        header: {
            author: 'emma roth',
            timePosted: 'two hours ago',
        },
        link: 'https://www.theverge.com/2023/12/5/23989257/another-trailer-for-contra-operation-galuga'
    },
    {
        type: 'regular',
        image: topstory4,
        description: `Everything You Need To Know About Baldur’s Gate 3`,
        header: 'tech',
        headerLink: '/',
        footer: {
            author: 'greenman',
            timePosted: '4:30 PM PST',
            numberOfComments: 2,
        },
        link: 'https://www.greenmangaming.com/blog/everything-you-need-to-know-about-baldurs-gate-3/'
    },
    {
        type: 'regular',
        image: topstory5,
        header: 'gaming',
        headerLink: '/',
        description: `Baldur’s Gate 3 Is a Fantasy Epic to Be Played After Dark`,
        footer: {
            author: 'wirecutter',
            timePosted: '2:30 PM PST',
            numberOfComments: 9,
        },
        link: 'https://nytimes.com/wirecutter/blog/baldurs-gate-3-review/'
    },
    {
        type: 'video',
        videoLink: 'https://www.youtube.com/embed/QZF8Of8s6Z0?si=SfkW6q3ZWNKWVJPa',
        firstSentence: 'Apple Arcade is assembling a Dream Team.',
        description: `My everlasting search for a new Sonic game that isn’t soul-crushing or a 
        technical mess may have come to an end but there’s a catch: it’s only available on Apple Arcade.
        Sonic Dream Team, which Polygon makes sound like a better version of Sonic Superstars, launches today on Apple Arcade.
        
        Also coming today to Apple Arcade is another dream game, Disney meets Animal Crossing sim Disney Dreamlight Valley: 
        Arcade Edition, along with Puzzle & Dragons Story and Turmoil+.`,
        header: {
            author: 'ash parish',
            timePosted: '8:42 PM PST',
        },
        link: 'https://www.theverge.com/2023/12/5/23989239/apple-arcade-is-assembling-a-dream-team'
    },
];

export const popularStories = [
    {
        description: `Baldur's Gate 3 Review: "A new gold standard for RPGs`,
        footer: {
            author: 'gameradar',
            timePosted: '4:30 PM PST',
            numberOfComments: 100,
        },
        link: 'https://www.gamesradar.com/baldurs-gate-3-review/'
    },
    {
        description: `Baldur's Gate 3 is the perfect couples' game `,
        footer: {
            author: 'polygon',
            timePosted: '9:30 PM PST',
            numberOfComments: 150,
        },
        link: 'https://www.polygon.com/23827294/baldurs-gate-3-couples-game'
    },
    {
        description: `Where to find Halsin the druid in Baldur's Gate 3`,
        footer: {
            author: 'pcgamer',
            timePosted: '4:30 PM PST',
            numberOfComments: 600,
        },
        link: 'https://www.pcgamer.com/baldurs-gate-3-find-halsin/'
    },
    {
        description: `Everything You Need To Know About Baldur’s Gate 3`,
        footer: {
            author: 'greenman',
            timePosted: '4:30 PM PST',
            numberOfComments: 200,
        },
        link: 'https://www.greenmangaming.com/blog/everything-you-need-to-know-about-baldurs-gate-3/'
    },
    {
        description: `Baldur’s Gate 3 Is a Fantasy Epic to Be Played After Dark`,
        footer: {
            author: 'wirecutter',
            timePosted: '2:30 PM PST',
            numberOfComments: 92,
        },
        link: 'https://nytimes.com/wirecutter/blog/baldurs-gate-3-review/'
    },
];