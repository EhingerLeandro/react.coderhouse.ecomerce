import { NavLink, Link } from 'react-router-dom';
import CarWidget from '../CartWidget/CartWidget';
import './navBar.css'

const NavBar = () =>{
    return(
        <nav className='nav'>
           <div className='logo-container'><Link className='logo' to='/'> <h1 className=''>Leo Ecomerce</h1> </Link></div>
            <ul className=''>
                <NavLink className='m-1' to={'/category/smartphone'}><button className='btn btn-primary'>Smartphones</button></NavLink> 
                <NavLink className='m-1' to={'/category/tablet'}><button className='btn btn-primary'>Tablets</button></NavLink>
                <NavLink className='m-1' to={'/category/laptop'}><button className='btn btn-primary'>Laptops</button></NavLink>
            </ul>
            <Link className='logo' to='/cart'>
                <CarWidget/>
            </Link>
        </nav>
    )
}

export default NavBar;