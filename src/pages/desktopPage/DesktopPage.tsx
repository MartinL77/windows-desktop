import React, { useEffect, useRef, useState } from "react";
import { DesktopWrapper, StyledBackgroundImage } from "./desktopPage.styled";
import WindowsTaskBar from "../../components/windowsTaskbar/WindowsTaskbar";
import WindowsMenu from "../../components/windowsMenu/WindowsMenu";

const DesktopPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false); 
        }
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <DesktopWrapper>
            <StyledBackgroundImage src="/windows_background_1920x1080.jpg" />
            <WindowsTaskBar onToggleMenu={toggleMenu} buttonRef={buttonRef} />
            {isMenuOpen && <WindowsMenu ref={menuRef} />}
            </DesktopWrapper>
        </>
    );
}

export default DesktopPage;