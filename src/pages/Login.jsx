import Header from "../components/Header"
import "../components/Header.css"

function Log(){
     return(
      <div>
         <Header />
            <div className="div">
        <div className="form">
        <form action="">
            <input type="text" placeholder="first name" />
            <input type="text" name="" id=" " placeholder="lastname" />
            <input type="email" placeholder="email" />
            <input type="password"  placeholder="password"/>
            <input type="image"  placeholder="image"  />
            <button type="submit" className="sb">submit</button>
        </form>
        </div>
        </div>
      </div>
     )
} export default Log