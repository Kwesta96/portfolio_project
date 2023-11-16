import './navbar.scss';
// import {LinkedInIcon} from '@mui/icons-material/LinkedIn';
// import {MailIcon} from '@mui/icons-material/Mail';
import { LinkedIn, Mail } from "@material-ui/icons";


export const Navbar = ({menuOpen, setMenuOpen}) => {


  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className='logo'>logo.</a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>pk.owusu96@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line1'></span>
            <span className='line1'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
