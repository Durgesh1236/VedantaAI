import "./Sidebar.css"
import "./Darktheme.css"
import { assets } from '../../assets/assets'
import { useState } from "react";
export default function Bottom({ extended }) {

    const [SettingData, setSettingData] = useState(false);
    let settingDetail = () => {
        setSettingData(true);
        if (SettingData === true) {
            setSettingData(false);
        }
    }

    return (
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended ? <p>Help</p> : null}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended ? <p>Activity</p> : null}
            </div>
            <div onClick={settingDetail} className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended ? <p>Settings</p> : null}
            </div>

            {SettingData ?

                <div className="detail-txt">

                    <div className="extension">
                    <i class="fa-solid fa-puzzle-piece"></i>
                    <p>Extensions</p>
                    </div>
                    
                    <div className="link">
                    <i class="fa-solid fa-link"></i>
                    <p>Your public links</p>
                    </div>

                    <div className="dark-theme">
                    <i class="fa-regular fa-moon"></i>
                    <p>Dark theme</p>
                    <label class="switch">
                    <input type="checkbox" checked></input>
                     <span class="slider round"></span>
                    </label>
                    </div>
                </div>

                : null
            }
        </div>
    );
}