import React, { useContext, useState } from "react"
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { Context } from "../../context/content"
import Bottom from "./../Sidebar/Bottom.jsx"
const Sidebar = () => {

    const [extended, setextended] = useState(false);
    const { onSent, prevPrompt, setrecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setrecentPrompt(prompt)
        await onSent(prompt)
    }

    const detailshow = () => {
        setextended(prev => !prev);
    }

    let Newchat = () => {
        newChat()
    }

    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" src={assets.menu_icon} alt="" onClick={detailshow}></img>
                <div onClick={Newchat} className="new-chat">
                    <img src={assets.plus_icon} alt=""></img>
                    {extended ?
                        (<p>New Chat</p>) : null
                    }
                </div>

                {extended ?
                    (<div className="recent">
                        <p className="recent-title">Recent</p>
                        {
                            prevPrompt.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} className="recent-entry">
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 18)}...</p>
                                    </div>
                                )
                            })
                        }

                    </div>)
                    : null
                }

            </div>

            {
                <Bottom extended={extended} />
            }

        </div>
    )
}

export default Sidebar