import React from 'react'
import {Link} from 'react-router-dom'


const PunchcardPreview = ({punchcard}) => {

    //component just to show all the data from a punchcard. imitate style like a credit card.
    // will LINK to Punchard component, so it can be used. 

//   const allRatings = reviews.map(r => r.rating) 
//   const ratingsAvg = reviews.length ? allRatings.reduce((a,b) => a + b) / allRatings.length : null

  // <Punchcard key={punchcard.id} punchcard={punchcard} />

  return (
    <>
    <article>
      <header>
      <em>{punchcard.name}</em>
      </header>

      <p>{punchcard.count} more punches needed until</p>

      <p>{punchcard.reward}!</p>
      <footer>
      <Link to={`/punchcards/${punchcard.id}`}>
          OPEN
      </Link>
      </footer>
    </article>
    </>
  )
}

export default PunchcardPreview