import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import "../css/footer.css"

const Footer = () => {
    return (
        <footer>
            <p>Stay in touch with us:</p>
            <hr />
            <div>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </div>
            <p>Created by <a href="">moneigbour</a> | &copy; {new Date().getFullYear()} moneigbour | All Right Reserved.</p>
        </footer>
    );
}

export default Footer;
