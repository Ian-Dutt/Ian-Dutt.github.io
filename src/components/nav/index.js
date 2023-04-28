import { Nav, NavLink, NavLogo, NavMenu } from './navElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLogo>
                        <NavLink to="/">
                            Ian Dutt
                        </NavLink>
                    </NavLogo>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar