import React, { useState } from "react"

interface NewSuperstitionProps {
  handleNewSuperstition: (superstition: SuperstitionFormData) => void
}

interface SuperstitionFormData {
  title: string;
  description: string;
  category: string;
}

const NewSuperstition: React.FC<NewSuperstitionProps> = (props) => {
  const [form, setForm] = useState<SuperstitionFormData>({
    title: '',
    description: '',
    category: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleNewSuperstition(form)
    setForm({
      title: '',
      description: '',
      category: ''
    })
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>Title: 
        <input 
          type="text"
          value={form.title}
          onChange={handleChange}
          name="title"
        />
      </label>
      <label>Description: 
        <input 
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
          />
      </label>
      <label>Category: 
        <input
          type="text"
          value={form.category}
          onChange={handleChange}
          name="category"
          />
      </label>
      <button type="submit">Create Superstition</button>
    </form>
  )
}

export default NewSuperstition