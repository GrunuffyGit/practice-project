import MostPopular from "./MostPopular"
import StorySide from "./StorySide"
import './styles.css';

const Main = () => {
    return(
        <div className="section-margin section">
            <StorySide />
            <MostPopular />
        </div>
    )
}

export default Main;