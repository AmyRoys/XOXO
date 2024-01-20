import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#gossip">gossip</a></li>
                <li><a href="#pics">pics</a></li>
                <li><a href="#parties">parties</a></li>
                <li><a href="#archives">archives</a></li>
                <li><a href="#links">links</a></li>
            </ul>
        </div>
    );
};

export default Navbar;