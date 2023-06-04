import React, {useEffect, useRef, useState} from 'react';
import chevrondown from "../../../assets/chevron-down.svg";
import menu from "../../../assets/menu.svg";
import {Link} from "react-router-dom";
import book_2 from "../../../assets/book_2.png";
import skip_back from '../../../assets/skip_back.svg'
import skip_forward from '../../../assets/skip_forward.svg'
import seconds_back from '../../../assets/seconds_back.svg'
import seconds_forward from '../../../assets/seconds_forward.svg'
import playbtn from '../../../assets/playbtn.svg'
import moon from '../../../assets/moon.svg'
import audio from '../../../assets/wav.mp3'
import pause from '../../../assets/pause.svg'
const Audio = () => {

    const [audiotime,setAudiotime] = useState(0)
    const audioRefH = useRef(null)
    const [duration,setDuration] = useState(0)


    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = Math.floor(seconds % 60)
        const formattedSeconds = String(remainingSeconds).padStart(2, '0')
        return `${minutes}:${formattedSeconds}`
    }


    const [play,setPlay] = useState(false)
    const toggleAudio = () => {
        if (play) {
            audioRefH.current.pause()
        }
        else {
            audioRefH.current.play()
        }
        setPlay(!play)
    }

    useEffect(() => {
        const audioElement = audioRefH.current;

        audioElement.addEventListener('loadedmetadata', () => {
            setDuration(audioElement.duration);
        });

        const interval = setInterval(() => {
                setAudiotime(Math.floor(audioElement.currentTime))
        }, 1000)

        return () => {
            clearInterval(interval);
            audioElement.removeEventListener('loadedmetadata', () => {});
        };
    }, []);

    const handleRangeChange = (event) => {
        const time = parseFloat(event.target.value)
        audioRefH.current.currentTime = time
        setAudiotime(time)
    };
    const Sec_Forward = () => {
        const newTime = audioRefH.current.currentTime + 10;
        if (newTime <= duration) {
            audioRefH.current.currentTime = newTime;
            setAudiotime(newTime);
        }
        else {
            audioRefH.current.currentTime = duration;
            setAudiotime(duration);
        }
    };
    const Sec_Back = () => {
        const newTime = audioRefH.current.currentTime - 10;
        if (newTime >= 0) {
            audioRefH.current.currentTime = newTime;
            setAudiotime(newTime);
        }
        else {
            audioRefH.current.currentTime = 0;
            setAudiotime(0);
        }
    };



    return (
        <div>
            <header className='interpage-header2 bookpage-mainApp'>
                <nav className='interpage-uppernav'>
                    <Link to='/books/1000002'>
                        <img width='24px' height='24px' src={chevrondown} alt=""/>
                    </Link>
                    <ul className='interpage-uppernavbtns '>
                        <li><img src={menu} width='20px' height='20px'  alt=""/></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className='interpage-audiocover'>
                    <div className='interpage-blurbg'>
                    </div>
                    <img className='interpage-bookimg' src={book_2} width='173px' height='249px' alt=""/>
                </div>
                <div className='interpage-audiocontrols'>
                    <div className='interpage-audiobookinf'>
                        <h1 className='interpage-audiobooktitle'>
                            Futurama
                        </h1>
                        <h2 className='interpage-audiobookauthor'>
                            Michael Douglas jr.
                        </h2>
                    </div>
                    <div>
                        <input className='audiorange' type="range" max={duration} value={audiotime} onChange={handleRangeChange} />
                    </div>
                    <div className='time'>
                        <span>{formatTime(audiotime)}</span>
                        <span>-{formatTime(duration-audiotime)}</span>
                    </div>
                    <div className='interpage-ctrls'>
                        <img src={skip_back} width={'24px'} height={'24px'} alt=""/>
                        <div className='innercontrols'>
                            <img onClick={Sec_Back} src={seconds_back} alt=""/>
                            <img onClick={toggleAudio} width='64px' height='64px'  src={!play ? playbtn : pause} alt=""/>
                            <img  onClick={Sec_Forward} src={seconds_forward} alt=""/>
                        </div>
                        <img src={skip_forward} width={'24px'} height={'24px'} alt=""/>
                    </div>
                    <div className='audiospeedctrls'>
                        <img width='24px' height='24px' src={moon} alt=""/>
                        <span className='audiospeed'>
                        1.0x
                    </span>
                    </div>
                    <audio ref={audioRefH} src={audio}/>
                </div>
            </main>
        </div>
    );
};

export default Audio;