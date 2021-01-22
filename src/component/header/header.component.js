import './header.style.css';

const Header = () => (
 <div className='header'>
     <h1 className='logo'>Header</h1>
     <div className='nav'>
         <span className='nav-link'>About</span>
         <span className='nav-link'>Price</span>
         <span className='nav-link'>Contact</span>
     </div>
 </div>
)

export default Header;