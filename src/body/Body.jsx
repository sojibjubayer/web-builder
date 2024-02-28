import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import MainCards from "./cards/MainCards";


const Body = () => {
    return (
        <div className="body">
            <div>
                <h2>Best Website builders in the US</h2>
            </div>

            {/* date and time  */}
            <div className="dated">
                <p>Last Updated - February 22, 2020    &nbsp;  &nbsp;  &nbsp;  Advertising Disclosure</p>
                <p>Top Relevant<MdKeyboardArrowDown /></p>
            </div>

            {/* submenu tools */}
            <div >
                <ul className="submenu">
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                </ul>
            </div>

            {/* arrowMenu */}
            <div>
                <ul className="arrowMenu">
                    <li>Home</li><MdArrowForwardIos />
                    <li>Hosting for all</li><MdArrowForwardIos />
                    <li>Hosting</li><MdArrowForwardIos />
                    <li>Hosting6</li><MdArrowForwardIos />
                    <li>Hosting5</li><MdArrowForwardIos />
                </ul>
            </div>
          
            <MainCards />
        </div>
    );
};

export default Body;