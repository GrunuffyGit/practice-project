import Card from "../Components/Card";
import NumberCircle from "../Components/NumberCircle";
import { popularStories } from "./data";

const MostPopular = () => {
    let counter = 0;

    return (
        <div className="most-popular">
            <div className="popular-container">
                <div className="popular-header">Most Popular</div>
                <div className="popular-stories">
                    <ul className="popular-stories-list">
                        {
                            popularStories.map((story) => {
                                counter++;
                                return (
                                    <li key={`topstory-card-${counter}`} className='story-container'>
                                        <NumberCircle number={counter} size='lg'/>
                                        <Card
                                            cardType='top-story'
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
            </div>
        </div>
    )
}

export default MostPopular;