import { Link } from "react-router-dom"

//types
import { Superstition } from "../../types/models"

interface SuperstitionProps{
  superstition: Superstition;
  handleDeleteSuperstition: (id: number) => Promise<void>
}

const SuperstitionCard = (props: SuperstitionProps): JSX.Element => {
  const {superstition, handleDeleteSuperstition} = props

  return (
    <article>
      <h1>{superstition.title}</h1>
      <h2>{superstition.description}</h2>
      <Link to={`/superstitions/${superstition.id}/update`} state={{superstition}}>Update the Legend</Link>
      <button onClick={() => handleDeleteSuperstition(superstition.id)}>Delete</button>
    </article>
  )
}

export default SuperstitionCard