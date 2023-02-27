import { Superstition } from "../../types/models"

import SuperstitionCard from "../../components/SuperstitionCard/SuperstitionCard"

interface SuperstitionProps {
  superstitions: Superstition[]
}

const Superstitions = (props: SuperstitionProps): JSX.Element => {

  const {superstitions} = props

  if(!superstitions.length) return <p>No Superstitions Exist(yeah right)</p>

  return (
    <main className='superstitionList'> 
      {superstitions.map((superstition: Superstition) => 
        <SuperstitionCard key={superstition.id} superstition={superstition}/>
      )}
    </main>
  )
}

export default Superstitions 