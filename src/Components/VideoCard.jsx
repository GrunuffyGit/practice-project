import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoCard = ({
    description,
    firstSentence,
    header,
    videoLink
}) => {
    console.log(description)
    return(
        <div className="video-card">
            <div className="video-card-icons">
                <a className="text-grey">
                    <FontAwesomeIcon className='video-card-comment-icon' icon={faMessage} />
                </a>
            </div>
            <div className="video-card-content">
                <div className="video-card-content-header">
                    <span className="viedo-card-author">{header.author}</span>
                    <span>{header.timePosted}</span>
                </div>
                <p className="video-card-content-description first-setence">
                    {firstSentence}
                </p>
                <p className="video-card-content-description">
                    {description}
                </p>
                <div className="video-card-video">
                    <iframe
                    src={videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen 
                />
                </div>
                
            </div>
        </div>
    );
}

export default VideoCard;