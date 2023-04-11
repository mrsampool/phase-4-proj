import React from 'react'
import {Link} from 'react-router-dom'


const PunchcardPreview = ({punchcard, customer}) => {

  return (
    <>
    <article>
      <header>
      <em>{punchcard.name}</em>
      </header>
  
      <p>{punchcard.count} more to go</p>

      <p>{punchcard.reward}!</p>
      <footer>
      <Link to={`/customers/${punchcard.customer_id}/punchcards/${punchcard.id}`}>
          OPEN
      </Link>
      </footer>
    </article>
    </>
  )
}

export default PunchcardPreview