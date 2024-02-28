import cardImage from '../../assets/cardImage.png'
import { IoIosArrowDown } from "react-icons/io";
const MainCards = () => {
    return (
        <div className="cards">
            <div className="card">
                <div className="left">
                    <img src={cardImage} alt="card Image" />
                    <p>Biulder</p>
                </div>
                <div className="center">
                    <p>WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <p>Main highlights</p>
                    <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    <p>Show more<IoIosArrowDown /></p>
                </div>
                <div className="right">
                    <div>
                        <p>9.8</p>
                        <p>Exceptional</p>
                        <p>star</p>
                    </div>
                    <button className='button'>view</button>

                </div>

            </div>
        </div>
    );
};

export default MainCards;