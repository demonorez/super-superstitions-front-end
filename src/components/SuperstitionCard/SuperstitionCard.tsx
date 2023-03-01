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
    <article className='container'>
      <h1>{superstition.title}</h1>
      <img className='img' src={superstition.image} />
      <h2>{superstition.description}</h2>
      {superstition.profileId === user?.id && (
        <>
      <Link to={`/superstitions/${superstition.id}/update`} state={{superstition}}>
        <button className='button'>Update the Legend</button>
      </Link>
      <button className='button' onClick={() => handleDeleteSuperstition(superstition.id)}>Delete</button>
      </>
      )}
    </article>
  )
}

export default SuperstitionCard