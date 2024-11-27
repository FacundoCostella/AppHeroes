import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../components/screens/Login/Login'
import { useAppSelector } from '../hooks/redux'
import { ProtectedRoutes } from './ProtectedRoutes'



export const AppRouter = () => {

  const isLogged = useAppSelector(state => state.auth.isLogged)
  return (
    //Defino las rutas de la página web
    <>
    <Routes> 
      {isLogged
      ? <Route path="/*" element={<ProtectedRoutes/>}/>
      : <Route path="/*" element={<Navigate to={"/login"}/>}/>
      }
        {/* Se define la ruta y en element va el elemento que voy a estar mostrando */}
        <Route path="/login" element={<Login/>} />
    </Routes>
    </>

  )
}


