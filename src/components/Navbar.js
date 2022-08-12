
import {Link} from "react-router-dom"
import Logo from "../Assets/logo.jpeg" 



const Navbar = (props) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link style={{ margin:'10px' ,fontSize: 20}} className="navbar-brand" to="/"> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
          <div className='col text-start py-1'>
                    <img src={Logo} style={{width:"46px", height:"46px",  borderRadius: "50%",
    overflow: "hidden",
    marginTop: "-6px"}}
     alt='...' />
                </div>

        <div style={{  flexDirection: "row",justifyContent: "flex-end",margin:'10px' }} className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" to="/"> Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/blogs"> Blog</Link>

                </li>
            </ul>
        </div>
    </nav>
    
    

    </div>
  )
}

export default Navbar