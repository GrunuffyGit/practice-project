import Card from "../Components/Card";
import VideoCard from "../Components/VideoCard";
import { stories } from "./data";

const StorySide = () => {
    return (
        <div className="story-side mw-560">
            <ul className="story-side-list">
                {stories.map((story)=>{
                    console.log(story)
                    return (
                        <li className="story-container">
                            {
                               story.type === 'video' ? (
                                    <VideoCard 
                                        description={story.description}
                                        firstSentence={story.firstSentence}
                                        header={story.header}
                                        videoLink={story.videoLink}
                                    />
                                ) : (
                                    <Card
                                        cardType='story'
                                        image={story.image}
                                        description={story.description}
                                        header={story.header}
                                        headerLink={story.headerLink}
                                        footer={story.footer}
                                        link={story.link}
                                    />
                                ) 
                            }
                        </li>
                        )
                })}
            </ul>
        </div>
    )
}

export default StorySide;