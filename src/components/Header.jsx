import "./Header.css"
import { NavLink } from "react-router-dom"
import Avatar from "../assets/Face.jpg"
function Header(){
     return(
         <div className="headerContainer">
           <h3 className="logoText">
             dev_Q
           </h3>
             <div className="navcont">
               <NavLink to="/"  className="link"> home</NavLink>
               <NavLink to="/about"  className="link" >About</NavLink>
               <NavLink to="/contact"  className="link" > contact us</NavLink>
               <NavLink to="/setting"  className="link" > setting</NavLink>
             </div>
             <img src={Avatar} alt="" />
              <div className="buttonCont">
              <NavLink to="/Login"  className="link"><button>sign in</button></NavLink>

                 <button>log out</button>
              </div>
         </div>
     )
}export default Header