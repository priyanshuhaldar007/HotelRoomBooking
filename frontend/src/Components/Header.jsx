import '../assets/Styles/Header.css';
import Header1 from '../assets/Imgs/Header1.png'

export default function Header() {
    return (
        <div className="Header">
            <div className="imgContainer">
                <img src={Header1} alt="" />
            </div>
            <div className="headerContent fc-white">
                <div className="headerText">
                    <div className="heading">Amazing Getaways</div>
                    <div className="paragraph">
                        A rich group of handpicked hotels for a break from the chaos. Explore our collection in one of most delightful cities of India.
                    </div>
                </div>
                <div className="headerCounter">
                    <span>1</span>
                    <span>/3</span>
                </div>
            </div>
        </div>
    );
}
