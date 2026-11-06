import React, { useEffect, useRef, useState } from 'react';
import WebsiteContainer from './WebsiteContainer';
import '../styles/DevicePreview.css';

type DevicePreviewProps = {
    link?: string;
    phoneLink: string;
}

// iPhone 18 Pro Max screen in points
const PHONE_WIDTH = 440;

function DevicePreview(props: DevicePreviewProps){
    const [device, setDevice] = useState<'computer' | 'phone'>('computer');
    const [phoneOpened, setPhoneOpened] = useState(false);
    const [fit, setFit] = useState({ scale: 0, height: 0 });
    const screenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const screen = screenRef.current;
        if (!screen) return;
        const measure = () => {
            const scale = screen.clientWidth / PHONE_WIDTH;
            if (scale > 0) setFit({ scale, height: screen.clientHeight / scale });
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(screen);
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
                    <WebsiteContainer link={props.link}></WebsiteContainer>
                </div>
                <div className='devicePhone'>
                    <div className='iphone'>
                        <i className='iphoneKey iphoneAction'></i>
                        <i className='iphoneKey iphoneVolUp'></i>
                        <i className='iphoneKey iphoneVolDown'></i>
                        <i className='iphoneKey iphonePower'></i>
                        <i className='iphoneKey iphoneCamera'></i>
                        <div className='iphoneScreen' style={{ '--s': fit.scale } as React.CSSProperties}>
                            <div className='iphoneStatus'>
                                <span>9:41</span>
                                <i className='iphoneIsland'></i>
                                <i className='iphoneBattery'></i>
                            </div>
                            <div className='iphoneApp' ref={screenRef}>
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
