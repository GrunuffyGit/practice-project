import HeroStory from "./HeroStory";
import Logo from '../images/logo.png'
import './styles.css';
import TopStoriesList from "./TopStoriesList";

const Main = () => {
    return (
        <div className="section-margin section">
                <div>
                    <div className="logo">
                        <img src={Logo}/>
                    </div>
                    <HeroStory />
                </div>
                <TopStoriesList />
        </div>
    )
}
export default Main;