import Nav from "../components/Header"
import  "../components/Home.css"

function Home(){
      return(
           <div>
                <Nav />
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
} export default Home