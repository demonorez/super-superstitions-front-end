import { useState } from "react"

interface NewSuperstitionProps {
  handleNewSuperstition: (superstition: SuperstitionFormData) => void
}

interface SuperstitionFormData {
  title: string;
  image: string;
  description: string;
  category: string;
}

const NewSuperstition: React.FC<NewSuperstitionProps> = (props) => {
  const [form, setForm] = useState<SuperstitionFormData>({
    title: '',
    image: '',
    description: '',
    category: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      image: '',
      description: '',
      category: ''
    })
  }

  return (
    <main className='bodyImage'>
      <img src='favifaery.png' className='image'/>
      <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className='inputContainer'>
        <label className='label'>Title: </label>
          <input 
            className='input'
            type="text"
            value={form.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className='inputContainer'>
          <label className='label'>Image: </label>
          <input 
            className='input'
            type="text"
            value={form.image}
            onChange={handleChange}
            name="image"
          />
        </div>
        <div className='inputContainer'>
        <label>Description: </label>
          <input 
            className='input'
            type="text"
            value={form.description}
            onChange={handleChange}
            name="description"
            />
        </div>
        <div className='inputContainer'>
        <label>Category: </label>
          <input
            className='input'
            type="text"
            value={form.category}
            onChange={handleChange}
            name="category"
            />
        </div>
        <button type="submit" className='button'>Create Superstition</button>
      </form>
      </div>
    </main>
  )
}

export default NewSuperstition