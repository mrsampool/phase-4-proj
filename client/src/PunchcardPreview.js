import React from 'react'
import {Link} from 'react-router-dom'


const PunchcardPreview = ({punchcard}) => {

    //component just to show all the data from a punchcard. imitate style like a credit card.
    // will LINK to Punchard component, so it can be used. 

//   const allRatings = reviews.map(r => r.rating) 
//   const ratingsAvg = reviews.length ? allRatings.reduce((a,b) => a + b) / allRatings.length : null

  // <Punchcard key={punchcard.id} punchcard={punchcard} />

  return (
    <div>
      <hr/>
      <em>punchcard preview:</em>
      <p>business name: {punchcard.name}</p>
      <p>type of place: {punchcard.kind}</p>
      <p>{punchcard.count} more punches needed until reward</p>
      <p>reward: {punchcard.reward}</p>
      <Link to={`/punchcards/${punchcard.id}`}>
          OPEN
      </Link>
      <br/><br/>

        
    </div>
  )
}

export default PunchcardPreview