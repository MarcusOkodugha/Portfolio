import { useState, useRef, useEffect } from "react";
import '../styles/CvContainer.css'; 
import "../styles/index.css";

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
            <div className="cv-card">
                <img src="./assets/CV.jpg" style={{ objectFit: 'contain', width: 'auto', height: '100%' }}></img>
                <div style={{ display: "flex", width: "100%", justifyContent: "end", zIndex: "2", backgroundColor: "red" }}>
                    <button onClick={downloadCv} className="icon-button" style={{color:"black", position: "absolute", bottom: '10px', right: '10px', outline: "none", border: "none" }}>
                        <span className="material-symbols-outlined" style={{ color: 'inherit', transition: 'color 0.3s' }}>download</span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="dialog-overlay-cv" onClick={closeDialog}>
                    <div className="dialog-card-cv" ref={dialogRef} onClick={(e) => e.stopPropagation()}>
                        <button style={{position:"absolute",top:"10px", right:"10px", zIndex:"1002", color:"black"}} className="icon-button" onClick={closeDialog}>
                            <span className="material-symbols-outlined ">close</span>
                        </button>
                        {/* <object data="assets/CV.pdf#toolbar=0&view=FitH&zoom=page-width" type="application/pdf" width="100%" height="100%"></object> */}
                        <div className="pdf-wrapper">
                        <object data="assets/CV.pdf#toolbar=0&view=FitH" type="application/pdf" width="100%" height="100%"></object>
                        <div className="frame top-frame"></div>
                        <div className="frame bottom-frame"></div>
                        <div className="frame left-frame"></div>
                        <div className="frame right-frame"></div>
                    </div>
                    <button onClick={downloadCv} className="icon-button" style={{  color:"black", zIndex:"1003",position: "absolute", bottom: '10px', right: '10px', outline: "none", border: "none" }}>
                        <span className="material-symbols-outlined" style={{ color: 'inherit', transition: 'color 0.3s' }}>download</span>
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CvContainer;
