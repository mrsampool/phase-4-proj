import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const PunchcardItem = ({punchcard}) => {

    //comopnent just to show all the data from a punchcard. imitate style like a credit card.
    // will LINK to Punchard component, so it can be used. 

//   const allRatings = reviews.map(r => r.rating) 
//   const ratingsAvg = reviews.length ? allRatings.reduce((a,b) => a + b) / allRatings.length : null

  return (
    <div>

      {punchcard.name}
      <br/>
      {punchcard.kind}
      <br/>
      {punchcard.reward}
      <br/>
      <Link to={`/punchcards/${punchcard.id}`}>
          Open Punchcard
      </Link>
      <br/><br/>
      
{/* 
        <h2>{title}</h2>
        [photo]<br /><br />
        {address}<br />
        {service}<br />
        
        <Rating name="read-only" value={Math.ceil(ratingsAvg)} readOnly />
          <br />

        <Link to={`/punchcards/${punchcard.id}`}>
          <Button >{allRatings.length} reviews</Button>
        </Link> */}
        
    </div>
  )
}

export default PunchcardItem