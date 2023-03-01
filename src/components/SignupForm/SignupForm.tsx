// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// stylesheets

// types
import { AuthFormProps } from '../../types/props'
import { SignupFormData, PhotoFormData } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'

const SignupForm = (props: AuthFormProps): JSX.Element => {
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if(isSubmitted) return
    try {
      setIsSubmitted(true)
      await authService.signup(formData, photoData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = (): boolean => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className='signup'>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='container'
      >
        <div className='inputContainer'>
          <label htmlFor="name" className='label'>Name</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="email" className='label'>
            Email
          </label>
          <input
            className="input"
            type="text"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="password" className='label'>
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="confirm" className='label'>
            Confirm Password
          </label>
          <input
            className="input"
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="photo-upload" className='label'>
            Upload Photo
          </label>
          <input
            className="button"
            type="file"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
        <div className='inputContainer'>
          <button 
            disabled={isFormInvalid() || isSubmitted} 
            className='button'
          >
            {!isSubmitted ? "Sign Up" : "🚀 Sending..."}
          </button>
          <Link to="/">
            <button className='button'>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  )
}

export default SignupForm
