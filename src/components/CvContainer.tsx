import Card from "./Card";
import { useState, useRef, useEffect } from "react";
import '../styles/CvContainer.css'; 

function CvContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef(null);

    function downloadCv() {
        const link = document.createElement('a');
        link.href = './assets/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function openDialog() {
        setIsOpen(true);
    }

    function closeDialog() {
        setIsOpen(false);
    }

    function handleClickOutside(event: MouseEvent) {
        if (dialogRef.current && !(dialogRef.current as HTMLElement).contains(event.target as Node)) {
            closeDialog();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div onClick={openDialog}>
            <Card width='25rem' height='35rem' backgroundColor="#FFFFFF">
                <img src="./assets/CV.jpg" style={{ objectFit: 'contain', width: '100%', height: '100%' }}></img>
                <div style={{ display: "flex", width: "100%", justifyContent: "end", zIndex: "2", backgroundColor: "red" }}>
                    <button onClick={downloadCv} style={{ backgroundColor: "transparent", position: "absolute", bottom: '4px', right: '4px', outline: "none", border: "none" }}>
                        <span className="material-symbols-outlined" style={{ color: 'inherit', transition: 'color 0.3s' }}>download</span>
                    </button>
                </div>
            </Card>
            {isOpen && (
                <div className="dialog-overlay-cv" onClick={closeDialog}>
                    <div className="dialog-card-cv" ref={dialogRef} onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeDialog}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <div className='center-img'>
                            <img src="./assets/CV.jpg" alt="Curriculum Vitae" style={{ width: '100%', height: 'auto' }}></img>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CvContainer;
