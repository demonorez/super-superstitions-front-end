import { useState } from "react"
import { useLocation } from "react-router"
//types
import { Superstition } from "../../types/models"
import { NewSuperstitionFormData } from "../../types/forms"

interface UpdateSuperstitionProps {
  handleUpdateSuperstition: (superstitionData: Superstition) => Promise<void>
}

const UpdateSuperstition = (props: UpdateSuperstitionProps): JSX.Element => {
  const location = useLocation()
  const {superstition} = location.state
  const {handleUpdateSuperstition} = props

  const [formData, setFormData] = useState<NewSuperstitionFormData>({
    title: superstition.title,
    description: superstition.description,
    category: superstition.category
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    const updatedSuperstition = { ...superstition, ...formData }
    await handleUpdateSuperstition(updatedSuperstition)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>Title: 
        <input 
          type="text"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
      </label>
      <label>Description: 
        <input 
          type="text"
          value={formData.description}
          onChange={handleChange}
          name="description"
          />
      </label>
      <label>Category: 
        <input
          type="text"
          value={formData.category}
          onChange={handleChange}
          name="category"
          />
      </label>
      <button type="submit">Update the Legend</button>
    </form>
  )
}

export default UpdateSuperstition