

import  {  useEffect, useRef } from 'react';
import "../styles/ContactButton.css";

function ContactButton() {
    // const [ setIsHovering] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    function contactMe(){
        window.open('mailto:Marcus.Okodugha247@gmail.com');
    }

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const button = buttonRef.current;
            if (button) {
                const { left, top, width, height } = button.getBoundingClientRect();
                const buttonCenterX = left + width / 2;
                const buttonCenterY = top + height / 2;
                const mouseX = event.clientX;
                const mouseY = event.clientY;

                // Calculate distance from the center of the button to the cursor
                const xDistance = mouseX - buttonCenterX;
                const yDistance = mouseY - buttonCenterY;
                const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

                // Check if the cursor is within 100px of the button's center
                // setIsHovering(distance < 100);

                // If within 100px, position the button with the cursor at its center
                if (distance < 100) {
                    button.style.position = 'fixed';
                    button.style.left = `${mouseX - width / 2}px`;
                    button.style.top = `${mouseY - height / 2}px`;
                    button.style.transition = 'none';  // Remove transition for instant follow
                } else {
                    button.style.position = 'static';
                    button.style.transition = 'top 0.5s, left 0.5s'; // Reapply transition for smooth return
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <button onClick={contactMe} ref={buttonRef} className="contact-button">
            LET'S TALK
        </button>
    );
}

export default ContactButton;
