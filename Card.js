import React from 'react';


const Card = ({name, email, id}) => {
  return(<div className ='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt= 'robots' src={`https://robohash.org/${id}`} />
    <div> 
    <h2>{email} </h2>
    <p>{name} </p>
    </div>
</div>)
  
}
export default Card;
