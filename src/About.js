import Common from './Common'
import web from "../src/images/img2.png"

function About()
{
    return(<>
    <Common 
        name="Welcome to About page"
        imgsrc={web}
        visit='/contact'
        btname='Contact Now'
    />
    </>)
}

export default About;