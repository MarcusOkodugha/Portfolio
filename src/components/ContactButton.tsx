// import "../styles/ContactButton.css"
// import React, { useState, useRef, useEffect } from 'react';
// function ContactButton() {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const button = buttonRef.current;
//       if (button) {
//         const { left, top, width, height } = button.getBoundingClientRect();
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;

//         const xClose = Math.abs(mouseX - (left + width / 2)) < 100 + width / 2;
//         const yClose = Math.abs(mouseY - (top + height / 2)) < 100 + height / 2;

//         setIsHovering(xClose && yClose);

//         if (xClose && yClose) {
//           // Update the mouse position state
//           setMousePosition({
//             x: mouseX - (left + width / 2),
//             y: mouseY - (top + height / 2),
//           });
//         }
//       }
//     };

//         // Reset button position when the cursor is not near
//         const handleMouseLeave = () => {
//             setIsHovering(false);
//             setMousePosition({ x: 0, y: 0 });
//           };
      
//           window.addEventListener('mousemove', handleMouseMove);
//           window.addEventListener('mouseleave', handleMouseLeave);
      
//           return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             window.removeEventListener('mouseleave', handleMouseLeave);
//           };
//         }, []);
      
    
//         return (
//             <div>
//               <button
//                 ref={buttonRef}
//                 className="contact-button"
//                 style={{
//                   transform: isHovering
//                     ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
//                     : 'translate(0, 0)',
//                   transition: 'transform 0.2s ease',
//                 }}
//               >
//                 LET'S TALK
//               </button>
//             </div>
//           );
//         }

// export default ContactButton;


import { useState, useEffect, useRef } from 'react';
import "../styles/ContactButton.css"


function ContactButton() {
    const [isHovering, setIsHovering] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            const button = buttonRef.current;
            if (button) {
                const { left, top, width, height } = button.getBoundingClientRect();
                const mouseX = event.clientX;
                const mouseY = event.clientY;

                const buttonCenterX = left + width / 2;
                const buttonCenterY = top + height / 2;

                const xDistance = mouseX - buttonCenterX;
                const yDistance = mouseY - buttonCenterY;

                const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
                
                if (distance < 100) {
                    setButtonPosition({ 
                        top: (mouseY - height / 2)-17,
                        left: mouseX - width / 2
                    });
                    setIsHovering(true);
                } else {
                    setIsHovering(false);
                }
            }
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className="contact-button"
            style={{
                position: isHovering ? 'fixed' : 'static',
                top: isHovering ? buttonPosition.top : undefined,
                left: isHovering ? buttonPosition.left : undefined,
                transition: 'top 0.5s, left 0.5s',
            }}
        >
            LET'S TALK
        </button>
    );
}

export default ContactButton;
