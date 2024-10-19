
import { assets } from "../../assets/assets";
export default function Card(){
    return (
        <div className="cards">
        <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
        </div>

        <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
        </div>

        <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
        </div>

        <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
        </div>
    </div>
    )
}