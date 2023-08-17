import CarWidget from '../CartWidget/CartWidget'

const NavBar = () =>{
    return(
        <nav>
            <h1>Logo Ecomerce</h1>
            <ul>
                <button>option 1</button>
                <button>option 2</button>
                <button>option 3</button>
            </ul>
            <CarWidget/>
        </nav>
    )
}

export default NavBar;