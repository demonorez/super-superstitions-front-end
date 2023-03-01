import { useState } from "react";
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
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(!show)
  }

  return (
    <article className='container'>
      <h1>{superstition.title}</h1>
      <img className='img' src={superstition.image} />
      <button className='button' onClick={handleShow}>
        {show ? 'Hide' : 'Show'} description
      </button>
      {show && <h2>{superstition.description}</h2>}
      {superstition.profileId === user?.id && (
        <>
      <Link to={`/superstitions/${superstition.id}/update`} state={{superstition}}>
        <button className='button'>Update Legend</button>
      </Link>
      <button className='button' onClick={() => handleDeleteSuperstition(superstition.id)}>Delete</button>
      </>
      )}
    </article>
  )
}

export default SuperstitionCard