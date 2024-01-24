
import '../css/navigation.css'
const Navigation = ({display}) => {
    return (
        <nav style={{display:display}}>
        <a href="">Neigbours</a>
        <a href="">Business</a>
        <a href="">NGOs</a>
        <a href="">About</a>
        <a href="">sign in</a>
        <a href="">sign up</a>
        </nav>
    );
}

export default Navigation;
