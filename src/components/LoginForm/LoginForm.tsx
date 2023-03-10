// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services

// stylesheets
import * as authService from '../../services/authService'

// types
import { AuthFormProps } from '../../types/props'
import { LoginFormData } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'

const LoginForm = (props: AuthFormProps): JSX.Element => {
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
    }
  }

  const { email, password } = formData

  const isFormInvalid = (): boolean => {
    return !(email && password)
  }

  return (
    <main className='login'>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
    >
      <div className='inputContainer'>
        <label htmlFor="email" className='label'>Email</label>
        <input
          className="input"
          type="text"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor="password" className='label'>Password</label>
        <input
          className="input"
          type="password"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button disabled={isFormInvalid()} className='button'>
          Log In
        </button>
        <Link to="/">
          <button className='button'>Cancel</button>
        </Link>
      </div>
    </form>
    </main>
  )
}

export default LoginForm
