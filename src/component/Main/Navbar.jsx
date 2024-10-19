
import { assets } from "../../assets/assets";
export default function Navbar() {
    return (
        <div className="nav">
            <p>VedantaAI</p>
            {/* <p>Develop By Durgesh Kumar</p> */}
            <img  src={assets.user_icon} alt="" />
        </div>
    )
}