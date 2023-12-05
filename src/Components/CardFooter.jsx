import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFooter = ({
    author,
    timePosted,
    numberOfComments
}) => {
    return (
        <div className="card-footer">
            <a className="text-teal card-author">{author}</a>
            <span className="text-grey">{timePosted}</span>
            <span className="card-footer-seperator text-grey">|</span>
            <a className="text-grey">
                <FontAwesomeIcon icon={faMessage} />
                {` ${numberOfComments}`}
            </a>
        </div>
    )
}

export default CardFooter;