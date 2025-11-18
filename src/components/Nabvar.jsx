import { NavLink } from "react-router-dom"
import { NewsComponent } from "./NewsComponent"
import { HomeScreen } from "./HomeScreen"

export const Navbar = () => {
  return (
    <>
      <header id="header" className="flex justify-center bg-red-400 h-15 text-2xl">
        <div id="header-content" className="flex justify-between w-100">
          <div>
            <button id="logo-btn">
              <NavLink to="/home">
                <img className='text-5xl' alt="📰" />
              </NavLink>
            </button>
            
          </div>

          <button className="flex align-center border border-red-300 bg-red-600 h-10 rounded" >
            <NavLink to="/news" > Watch News </NavLink>
          </button>

          <div>
            <button className="add-new border border-red-300 bg-red-600 h-10 w-10 rounded">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div> 
        </div>
      </header>
    </>
  )
}
