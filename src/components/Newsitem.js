import React from "react";


const Newsitem =(props)=> {
 
  
    let { title, description, imageurl, newsurl ,author,date } = props;
    return (
      <div className="my-3">
        <div className="card " style={{width:"18rem"}} >
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text" id="desc">{description}...</p>
            <p className="card-text"> <small className="text-muted">By {author?author:"unknown" } on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer" href ={newsurl} target="-blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem
