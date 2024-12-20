import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import futuristicVid from "../videos/futuristic.mp4";
import "../styles/main1.css";
import { Box } from "@mui/material"; 
import icon from "../icons/mail.svg";
import icon1 from "../icons/chat.svg";
import icon2 from "../icons/diary.svg";
import Mail from "./Mail";
import Chat from "./Chat";
import Diary from "./Diary";
import clickSound from "../sounds/click-10.mp3"

export default function Main(props) {
    const [content, setContent] = useState("Dear future!");
    const [isDateAppended, setIsDateAppended] = useState(false);
    const [boxShadow, setBoxShadow] = useState("0 0 80px rgba(4,230,251,1)");
    const [optionNumber, setOptionNumber] = useState(1);
    
    const [userName, setUserName] = useState(localStorage.getItem('userName') || 'user');
    const navigate = useNavigate(); 

    const [Mailcontent, setMailContent] = useState(""); // Manage content state


    const handleNameSubmit = () => {
        if (userName.trim() !== '') {
          alert("Great! Go ahead Time Traveller")
          localStorage.setItem('userName', userName); // Save to localStorage

        }
      };
    const handleContentChange = (event) => {
        setMailContent(event.target.value); // Update content state when the user types
    };

    const audioRef = useRef(null); 
      const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play(); 
        }
      };


    function updateOptionNumber(num) {
        playAudio();
        setOptionNumber(num);
    }

    function handleHomeClick() {
        props.updatePage();
        navigate("/"); 
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBoxShadow((prevBoxShadow) =>
                prevBoxShadow === "0 0 80px rgba(4,230,251,1)"
                    ? "0 0 30px rgba(255, 255, 255,1)"
                    : "0 0 80px rgba(4,230,251,1)"
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!isDateAppended) {
            const currentDate = new Date();
            setContent((prevContent) => prevContent + `\n${currentDate.toLocaleString()}`);
            setIsDateAppended(true);
        }
    }, [isDateAppended]);

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    
    return (
        <div className="outer-container">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>

            <video className="vid" src={futuristicVid} autoPlay loop muted>
                Your browser does not support the video tag.
            </video>
            <div className='user-info'>
                                  <input 
                                    type="text" 
                                    placeholder="Enter your name Traveller!"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className='userName'
                                  />
                                  <button onClick={handleNameSubmit}>Set Name</button>
                                </div>
            <div className="options-container">
                <div>
                    <Box className="option" onClick={() => updateOptionNumber(1)} sx={{ boxShadow: boxShadow }}>
                        <img src={icon} alt="" />
                    </Box>
                    <Box className="option" onClick={() => updateOptionNumber(2)} sx={{ boxShadow: boxShadow }}>
                        <img src={icon1} alt="" />
                    </Box>
                </div>
                <div>
                    <Box className="option" onClick={() => updateOptionNumber(3)} sx={{ boxShadow: boxShadow }}>
                        <img src={icon2} alt="" />
                    </Box>
                    <Box className="option" onClick={()=>handleHomeClick()} sx={{ boxShadow: boxShadow }}>
                        Home
                    </Box>
                </div>
            </div>

            {optionNumber === 1 ? (
                <Mail 
                handleChange={handleChange} 
                content={content} 
                Mailcontent={Mailcontent} // Pass content as prop
                handleContentChange={handleContentChange}
                boxShadow={boxShadow} />
            ) : optionNumber === 2 ? (
                <Chat 
                userName = {userName}/>
            ) : (
                <Diary />
            )}
            <audio ref={audioRef} src={clickSound} preload="auto"></audio>
        </div>
    );
}
