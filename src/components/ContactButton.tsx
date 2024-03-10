import "../styles/ContactButton.css"
import React, { useState, useRef, useEffect } from 'react';
function ContactButton() {
    const [isHovering, setIsHovering] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleMouseMove(e) {
            const button = buttonRef.current;
            if (button) {
                const { left, top, width, height } = button.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;
    
                const xClose = Math.abs(mouseX - (left + width / 2)) < 100 + width / 2;
                const yClose = Math.abs(mouseY - (top + height / 2)) < 100 + height / 2;
    
                setIsHovering(xClose && yClose);
            }
        }
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    
  return (
    <div>
        <button
            ref={buttonRef}
            className="contact-button"
            style={{
                position: isHovering ? 'fixed' : 'static',
                left: isHovering ? 'calc(100% - 100px)' : 'auto',
                transition: 'all 0.5s ease',
            }}
        >
            LET'S TALK
        </button>
    </div>
  );
}

export default ContactButton;