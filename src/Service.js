import web from "../src/images/card6.jpg"
import Card from './Card'
import Sdata from "./Sdata";
function Service()
{
    return(<>
    
    <div className="con">
        <div className="control">

        {
            
            Sdata.map((val,ind)=>
            {
                return <Card  key={ind} imgsrc={val.imgsrc} title={val.title} />
            })
        }


        
        </div>
    </div>
    </>)
}

export default Service;