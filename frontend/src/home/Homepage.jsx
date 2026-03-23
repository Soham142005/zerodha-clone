
import Hero from './Hero';
import Awards from  './Awards';
import Stats from './Stats';
import Price from './Price';
import Education from './Education';
import OpenAccount from '../OpenAccount'


function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards/>
        <Stats/>
        <Price/>
        <Education />
        <OpenAccount />
        </>
     );
}

export default HomePage;