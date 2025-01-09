import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles/GooeyCursor.css";

const GooeyCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current!;
        const follower = followerRef.current!;

        // Update cursor and follower positions on mousemove
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;

            // Cursor follows the mouse instantly
            gsap.to(cursor, { x, y, duration: 0 });

            // Follower lags behind for a smooth effect
            gsap.to(follower, { x, y, duration: 0.3 });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default GooeyCursor;
