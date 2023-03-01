import { Link } from "react-router-dom"

//types
import { Superstition, User } from "../../types/models"

interface SuperstitionProps{
  superstition: Superstition;
  handleDeleteSuperstition: (id: number) => Promise<void>;
  user: User | null
}

const SuperstitionCard = (props: SuperstitionProps): JSX.Element => {
  const {superstition, handleDeleteSuperstition, user} = props

  return (
    <article>
      <h1>{superstition.title}</h1>
      <h2>{superstition.description}</h2>
      {superstition.profileId === user?.id && (
        <>
      <Link to={`/superstitions/${superstition.id}/update`} state={{superstition}}>Update the Legend</Link>
      <button onClick={() => handleDeleteSuperstition(superstition.id)}>Delete</button>
      </>
      )}
    </article>
  )
}

export default SuperstitionCard