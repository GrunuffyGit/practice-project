import CardFooter from "./CardFooter";
import "./styles.css"

const Card = ({
    cardType,
    image,
    header,
    description,
    footer,
    headerLink,
    link
}) => {
    return (
        <div className={`${cardType}-card`}>
            <div className="card-content">
                {header &&
                    <h1 className={`${cardType}-card-header`}>
                        <a href={headerLink}>
                            {header}
                        </a>
                    </h1>
                }
                <a href={link} className="card-description">
                    {description}
                </a>
                <CardFooter {...footer}/>
            </div>
            {image &&
                <a href={link} className="card-image">
                    <img src={image} />
                </a>
            }
        </div>
    );
}

export default Card;