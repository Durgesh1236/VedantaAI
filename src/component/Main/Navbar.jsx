
import { assets } from "../../assets/assets";
export default function Navbar() {
    return (
        <div className="nav">
            <p>VedantaAI</p>
            <img  src={assets.user_icon} alt="" />
        </div>
    )
}