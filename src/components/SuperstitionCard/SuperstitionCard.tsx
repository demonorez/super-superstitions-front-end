import { Link } from "react-router-dom"

//types
import { Superstition } from "../../types/models"

interface SuperstitionProps{
  superstition: Superstition
}

const SuperstitionCard = (props: SuperstitionProps): JSX.Element => {
  const {superstition} = props

  return (
    <article>
      <h1>{superstition.title}</h1>
      <h2>{superstition.description}</h2>
      <Link to={`/superstitions/${superstition.id}/update`} state={{superstition}}>Update the Legend</Link>
    </article>
  )
}

export default SuperstitionCard