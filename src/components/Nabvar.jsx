import { NavLink } from "react-router-dom"
import { NewsComponent } from "./NewsComponent"
import { HomeScreen } from "./HomeScreen"

export const Navbar = () => {
  return (
    <>
      <header id="header" className="flex h-30 items-center justify-center bg-linear-to-b 
      from-blue-500 to-blue-300 text-2xl ">
        <div id="header-content" className="flex justify-between w-100">
          <div>
            <button id="logo-btn" className="text-5xl">
              <NavLink to="/home">
                <img alt="📰" />
              </NavLink>
            </button>
            
          </div>

          <button className="watch-news-btn flex align-center bg-red-400 h-10 
          rounded " >
            <NavLink to="/news" className="flex items-center px-2 py-4" > Watch News </NavLink>
          </button>

          <div>
            <button className="add-new bg-red-400 h-10 w-10 rounded">
              <NavLink to="/news-creator" className="flex justify-center items-center">
                <i className="fa-solid fa-plus"></i>
              </NavLink>
            </button>
          </div> 
        </div>
      </header>
    </>
  )
}
