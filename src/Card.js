import web from "../src/images/card6.jpg"

function Card(props)
{
    return(<>
        
 <div className="card ">
  <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">some quick example text to build on the card title and make up the bulk of the cards contnet</p>
    <a href="#" className="btn btn-primary">Get More</a>
  </div>
</div>
              
    </>)
}

export default Card;