import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/content";
import Navbar from "./Navbar";
import Card from "./Card";
const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setinput, input } = useContext(Context);

    let Searchtext = (e) => {
        setinput(e.target.value);
        // console.log(input);
    }

    let Sendtxt = () => {
        onSent();
    }

    return (
        <div className="main">
            {/* <div className="nav">
                <p>VedantaAI</p>
                <img src={assets.user_icon} alt="" />
            </div> */}

            < Navbar />

            <div className="main-container">

                {
                    !showResult ?
                        <>
                            <div className="greet">
                                <p>
                                    <span>Hello, Dev.</span>
                                </p>
                                <p>
                                    How can I help you today
                                </p>
                            </div>

                                {/* Card-container */}
                            {
                            < Card />
                             }

                        </> : <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>

                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading
                                    ? <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={Searchtext} value={input} type="text" placeholder="Enter a prompt here..." />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {
                                input ?
                                    <img onClick={Sendtxt} src={assets.send_icon} alt="" />
                                    : null
                            }
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main