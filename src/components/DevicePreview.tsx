import React, { useEffect, useRef, useState } from 'react';
import '../styles/DevicePreview.css';

type DevicePreviewProps = {
    link?: string;
    phoneLink: string;
}

// iPhone 18 Pro Max in points: 440 × 956 screen, 6.5 black border and a 2 silver rim on each side, 56 status bar
const PHONE_WIDTH = 440;
const FRAME_WIDTH = 457;
const FRAME_EXTRA_HEIGHT = 17 + 56;
// The computer shows the app at a laptop width (Exodia's desktop layout starts at 1024), so the text stays readable.
const COMPUTER_WIDTH = 1180;

function DevicePreview(props: DevicePreviewProps){
    const [device, setDevice] = useState<'computer' | 'phone'>('computer');
    const [phoneOpened, setPhoneOpened] = useState(false);
    const [fit, setFit] = useState({ scale: 0, height: 0 });
    const phoneRef = useRef<HTMLDivElement>(null);
    const laptopRef = useRef<HTMLDivElement>(null);
    const [laptop, setLaptop] = useState({ scale: 0, height: 0 });

    useEffect(() => {
        const phone = phoneRef.current;
        if (!phone) return;
        const measure = () => {
            const scale = phone.clientWidth / FRAME_WIDTH;
            if (scale > 0) setFit({ scale, height: phone.clientHeight / scale - FRAME_EXTRA_HEIGHT });
        };
        measure();
        const screen = laptopRef.current;
        const measureLaptop = () => {
            if (!screen) return;
            const scale = screen.clientWidth / COMPUTER_WIDTH;
            if (scale > 0) setLaptop({ scale, height: screen.clientHeight / scale });
        };
        measureLaptop();
        const observer = new ResizeObserver(() => { measure(); measureLaptop(); });
        observer.observe(phone);
        if (screen) observer.observe(screen);
        return () => observer.disconnect();
    }, []);

    function pick(event: React.MouseEvent, next: 'computer' | 'phone'){
        event.stopPropagation();
        if (next === 'phone') setPhoneOpened(true);
        setDevice(next);
    }

    return (
        <div className='devicePreview' data-device={device}>
            <div className='deviceSwitch' role='tablist' onClick={(event) => event.stopPropagation()}>
                <button role='tab' aria-selected={device === 'computer'} aria-label='Computer' onClick={(event) => pick(event, 'computer')}>
                    <span className='material-symbols-outlined'>laptop_mac</span>
                </button>
                <button role='tab' aria-selected={device === 'phone'} aria-label='Phone' onClick={(event) => pick(event, 'phone')}>
                    <span className='material-symbols-outlined'>smartphone</span>
                </button>
            </div>
            <div className='deviceStage'>
                <div className='deviceComputer'>
                    <div className='websiteContainer'>
                        <div className='iframeContainer laptopScreen' ref={laptopRef}>
                            {props.link && laptop.scale > 0 &&
                                <iframe src={props.link} title='Computer preview'
                                    style={{ width: COMPUTER_WIDTH, height: laptop.height, transform: `scale(${laptop.scale})` }}></iframe>}
                        </div>
                    </div>
                </div>
                <div className='devicePhone'>
                    <div className='iphone' ref={phoneRef} style={{ '--s': fit.scale } as React.CSSProperties}>
                        <i className='iphoneKey iphoneAction'></i>
                        <i className='iphoneKey iphoneVolUp'></i>
                        <i className='iphoneKey iphoneVolDown'></i>
                        <i className='iphoneKey iphonePower'></i>
                        <i className='iphoneKey iphoneCamera'></i>
                        <div className='iphoneScreen'>
                            <div className='iphoneStatus'>
                                <span>9:41</span>
                                <i className='iphoneIsland'></i>
                                <i className='iphoneBattery'></i>
                            </div>
                            <div className='iphoneApp'>
                                {phoneOpened && fit.scale > 0 &&
                                    <iframe src={props.phoneLink} title='Phone preview'
                                        style={{ width: PHONE_WIDTH, height: fit.height, transform: `scale(${fit.scale})` }}></iframe>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevicePreview;
