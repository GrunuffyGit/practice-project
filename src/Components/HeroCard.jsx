import CardFooter from "./CardFooter";
import './styles.css';

const HeroCard = ({
    image,
    header,
    description,
    footer,
    link
}) => {
    return (
        <div className="hero-image-card">
            <div className="hero-image-container">
                <a href={link}>
                   <img
                    className="hero-image"
                    src={image}
                    /> 
                </a>
            </div>
            
            <div className="hero-card-content">
                <h1 className="hero-card-content-header">
                    <a className="hero-card-content-header-description" href={link}>
                        {header}
                    </a>
                </h1>
                <p className="hero-card-content-description">
                    {description}
                </p>
                <CardFooter
                    author={footer.author}
                    timePosted={footer.timePosted}
                    numberOfComments={footer.numberOfComments}
                />
            </div>
        </div>
    );
}

export default HeroCard;