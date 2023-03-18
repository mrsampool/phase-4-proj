import React from 'react'
import {Link} from 'react-router-dom'


const PunchcardItem = ({punchcard}) => {

    //component just to show all the data from a punchcard. imitate style like a credit card.
    // will LINK to Punchard component, so it can be used. 

//   const allRatings = reviews.map(r => r.rating) 
//   const ratingsAvg = reviews.length ? allRatings.reduce((a,b) => a + b) / allRatings.length : null

  return (
    <div>

      <p>{punchcard.name}</p>
      <br/>
      {punchcard.kind}
      <br/>
      {punchcard.count}
      <br/>
      {punchcard.reward}
      <br/>
      <br/><br/>
      [QR CODE]
        
    </div>
  )
}

export default PunchcardItem