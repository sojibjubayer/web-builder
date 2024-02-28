import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer">
            <div className="items">
                <div>
                    <h3>Categories</h3>
                    <ul>
                        <li>Web Builder</li>
                        <li>Hosting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    United States <MdKeyboardArrowDown />
                </div>
            </div>
        </div>
    );
};

export default Footer;