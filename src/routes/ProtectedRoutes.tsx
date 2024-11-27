import { Route, Routes } from "react-router-dom"
import { Home } from "../components/screens/Home/Home"
import { Header } from "../components/ui/Headers/Header"
import { Search } from "../components/screens/Search/Search"
import { DCHeroes } from "../components/screens/DCHeroes/DCHeroes"
import { MarvelHeroes } from "../components/screens/MarvelHeroes/MarvelHeroes"
import { HeroPage } from "../components/screens/HeroPage/HeroPage"

export const ProtectedRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/dcHeroes" element={<DCHeroes/>} />
      <Route path="/marvelHeroes" element={<MarvelHeroes/>} />
      <Route path="/hero/:id" element={<HeroPage/>} />
    </Routes>
    </>
  )
}
