import Card from '../Components/Card';
import NumberCircle from '../Components/NumberCircle';
import topstory1 from '../images/topstory1.png';
import topstory2 from '../images/topstory2.png';
import topstory3 from '../images/topstory3.png';
import topstory4 from '../images/topstory4.png';
import topstory5 from '../images/topstory5.png';

const stories = [
    {
        image: topstory1,
        description: `Baldur's Gate 3 Review: "A new gold standard for RPGs`,
        footer: {
            author: 'gameradar',
            timePosted: '4:30 PM PST',
            numberOfComments: 10,
        },
        link: 'https://www.gamesradar.com/baldurs-gate-3-review/'
    },
    {
        image: topstory2,
        description: `Baldur's Gate 3 is the perfect couples' game `,
        footer: {
            author: 'polygon',
            timePosted: '9:30 PM PST',
            numberOfComments: 1,
        },
        link: 'https://www.polygon.com/23827294/baldurs-gate-3-couples-game'
    },
    {
        image: topstory3,
        description: `Where to find Halsin the druid in Baldur's Gate 3`,
        footer: {
            author: 'pcgamer',
            timePosted: '4:30 PM PST',
            numberOfComments: 6,
        },
        link: 'https://www.pcgamer.com/baldurs-gate-3-find-halsin/'
    },
    {
        image: topstory4,
        description: `Everything You Need To Know About Baldur’s Gate 3`,
        footer: {
            author: 'greenman',
            timePosted: '4:30 PM PST',
            numberOfComments: 2,
        },
        link: 'https://www.greenmangaming.com/blog/everything-you-need-to-know-about-baldurs-gate-3/'
    },
    {
        image: topstory5,
        header: 'For the future',
        description: `Baldur’s Gate 3 Is a Fantasy Epic to Be Played After Dark`,
        footer: {
            author: 'wirecutter',
            timePosted: '2:30 PM PST',
            numberOfComments: 9,
        },
        link: 'https://nytimes.com/wirecutter/blog/baldurs-gate-3-review/'
    },
];

let counter = 0;

const TopStoriesList = () => {
    return(
        <div className="top-stories">
            <h1 className="text-teal top-stories-header">Top Stories</h1>
            <ul>
                {
                    stories.map((story) => {
                        counter++;
                        return (
                            <li key={`topstory-card-${counter}`} className='story-container'>
                                <NumberCircle number={counter} size='sm'/>
                                <Card
                                    cardType='top-story'
                                    image={story.image}
                                    header={story?.header}
                                    description={story.description}
                                    footer={story.footer}
                                    link={story.link}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TopStoriesList;