import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="text-white font-modern flex justify-center gap-10 px-12 py-4 z-50">
            <div className="text-2xl p-0.5 hover-underline-animation">
                <NavLink to='/'><p className="">Home</p></NavLink>
            </div>
            <div className="text-2xl p-0.5 hover-underline-animation">
                <NavLink to='/about'><p className="">About</p></NavLink>
            </div>
            <div className="text-2xl p-0.5 hover-underline-animation">
                <NavLink to='/projects'><p className="">Projects</p></NavLink>
            </div>
        </nav>
    )
}

export default Navbar