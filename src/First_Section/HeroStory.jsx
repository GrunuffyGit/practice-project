import HeroCard from "../Components/HeroCard";
import usagi2 from '../images/usagi2.png';

const data = {
    image: usagi2,
    header: 'Usagi and Piske',
    description: 'A rabbit who often hangs out with the bird Pisuke. He has a particularly playful personality among rabbits. Sometimes he gets angry at Pisuke for messing with him too much.',
    footer: {
        author: 'Kanahei',
        timePosted: '2 months ago',
        numberOfComments: 5
    },
    link: 'https://kanaheis-small-animals.jp/character/chara_1.html'
}

const HeroStory = () => {
    return (
        <div className="hero">
            <HeroCard {...data} />
        </div>
    );
}

export default HeroStory;