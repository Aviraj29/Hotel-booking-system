// import NavItem from './NavItem'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Navbar.css'

// import Header from '../header/Header'

// const navNames=['Home','About','Rooms','Services','Gallary','Review','Events']

export default function Navbar() {
//   const navNameItems= navNames.map(n => 
//     <NavItem navName = {n}/>)
const navigate = useNavigate()
  return (
    <>
    {/* <Header/> */}
    <nav className="navbar sticky-top navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">

     <img src="/images/Grand-Hotel-Logo-Template-removebg-preview (2).png" style={{width:70, height:70}} alt="logo" /> <span>Hotel Grand</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">

      <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page" >Home</Link>         
        </li> 
        <li className="nav-item">
          <Link to="/rooms" className="nav-link " aria-current="page" >Rooms</Link>         
        </li>  
        <li className="nav-item">
          <Link to="/offer" className="nav-link " aria-current="page" >Offers</Link>        
        </li> 
        <li className="nav-item">
          <Link to="/event" className="nav-link " aria-current="page" >Event</Link>        
        </li> 
        <li className="nav-item">
          <Link to="/services" className="nav-link " aria-current="page" >Services</Link>        
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link " aria-current="page" >Contact us</Link>        
        </li> 
        <li className="nav-item">
          <Link to="/review" className="nav-link " aria-current="page" >Review</Link>        
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link " aria-current="page" >About us</Link>        
        </li>
      </ul>
      
      <button onClick={()=>navigate('/login')} className="btn btn-success" type="submit">Login</button>
     
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}
