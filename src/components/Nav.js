import { Link } from 'react-router-dom';


function Nav()
{

    return (
        <nav class="navbar sticky-top" style={{ borderRadius: "5px", backgroundColor: "#E3CAA5" }}>
            <Link to="/home" className='navbar-brand text-light ps-2 fa fa-fade' style={{ color: '#C58940' }} >
                Paws&Tails<i class="fa fa-solid fa-paw fa-fade" size="2xl" style={{ color: '#C58940' }}></i></Link>

            <div class='nav'>
                <Link to="/home" class='nav-link '>Home</Link>
                <Link to="/petfood" class='nav-link ' >Store</Link>
                <Link to="/petdoctor" class='nav-link ' >Consult </Link>
                <div class="dropdown">
                    <div class=" dropdown-toggle nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Adoption
                    </div>

                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/dog-adoption" >Dog</Link></li>
                        <li><Link class="dropdown-item" to="/cat-adoption" >Cat</Link></li>
                    </ul>
                </div>
                <Link to="/successpage" class='nav-link '>SuccessPage</Link>
                <Link to="/" className='nav-link' style={{ fontFamily: 'cursive', color: '#C58940' }}>Login</Link>

            </div>
        </nav>
    )
}

export default Nav;
