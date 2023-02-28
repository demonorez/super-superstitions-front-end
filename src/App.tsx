// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Superstitions from './pages/Superstitions/Superstitions'
import NewSuperstition from './pages/NewSuperstition/NewSuperstition'
import UpdateSuperstition from './pages/UpdateSuperstition/UpdateSuperstition'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as superstitionService from './services/superstitionService'

// stylesheets
import './App.css'

// types
import { User, Profile, Superstition } from './types/models'
import { NewSuperstitionFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [superstitions, setSuperstitions] = useState<Superstition[]>([])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleNewSuperstition = async (superstitionData: NewSuperstitionFormData): Promise<void> => {
    const newSuperstition = await superstitionService.NewSuperstion(superstitionData)
    setSuperstitions([newSuperstition, ...superstitions])
    navigate('/superstitions')
  }

  const handleUpdateSuperstition = async (superstitionData: Superstition): Promise<void> => {
    const UpdatedSuperstition = await superstitionService.UpdateSuperstition(superstitionData)
    setSuperstitions(superstitions.map((s) => superstitionData.id === s.id ? UpdatedSuperstition : s))
    navigate('/superstitions')
  }

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles()  : setProfiles([])
  }, [user])

  useEffect((): void => {
    const fetchSuperstitions = async (): Promise<void> => {
      try {
        const superstitionData: Superstition[] = await superstitionService.fetchSuperstitions()
        setSuperstitions(superstitionData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchSuperstitions() : setSuperstitions([])
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/superstitions"
          element={
            <ProtectedRoute user={user}>
              <Superstitions superstitions={superstitions} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/new-superstition"
          element={
            <ProtectedRoute user={user}>
              <NewSuperstition handleNewSuperstition={handleNewSuperstition} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/superstitions/:id/update"
          element={
            <ProtectedRoute user={user}>
              <UpdateSuperstition handleUpdateSuperstition={handleUpdateSuperstition} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
