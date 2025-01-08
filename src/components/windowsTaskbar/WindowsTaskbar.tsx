import React, { useEffect, useState } from "react";
import Image from "../image/Image";
import {
    ImageContainer,
    MobileArrowButton,
    MobileImageArrowContainer,
    StartTaskBarButton,
    TaskBarContainer,
    TaskBarMainSection,
    TimeTaskBar,
} from "./windowsTaskbar.styled";

interface windowsTaskBarProps {
    onToggleMenu: () => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}

const WindowsTaskBar: React.FC<windowsTaskBarProps> = ({ onToggleMenu, buttonRef }) => {
    const [isArrowMenuOpen, setIsArrowMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(() =>
        new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }).format(new Date())
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(
                new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                }).format(new Date())
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <TaskBarContainer>
            <StartTaskBarButton
                ref={buttonRef}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleMenu();
                }}
            >
                <Image
                    src="/windows-icons/windows_xp_icon.png"
                    alt=""
                    height={30}
                    width={30}
                    style={{ marginLeft: "7px", marginRight: "7px" }}
                />
                Start
            </StartTaskBarButton>
            <TaskBarMainSection />
            <TimeTaskBar>
                <ImageContainer>
                    <Image
                        src="/windows-icons/Security - Ok.png"
                        alt=""
                        height={25}
                        width={25}
                        style={{ marginRight: "7px" }}
                    />
                    <Image
                        src="windows-icons/Network and Internet.png"
                        alt=""
                        height={25}
                        width={25}
                        style={{ marginRight: "7px" }}
                    />
                    <Image
                        src="/windows-icons/Volume.png"
                        alt=""
                        height={25}
                        width={25}
                        style={{ marginRight: "7px" }}
                    />
                </ImageContainer>
                <MobileArrowButton onClick={() => setIsArrowMenuOpen(!isArrowMenuOpen)}>
                    <Image
                        src="/windows-icons/arrow_left_icon.png"
                        alt=""
                        height={18}
                        width={18}
                    />
                </MobileArrowButton>
                {isArrowMenuOpen && (
                    <MobileImageArrowContainer>
                        <Image
                            src="/windows-icons/Security - Ok.png"
                            alt=""
                            height={25}
                            width={25}
                            style={{ marginRight: "7px" }}
                        />
                        <Image
                            src="/windows-icons/Network and Internet.png"
                            alt=""
                            height={25}
                            width={25}
                            style={{ marginRight: "7px" }}
                        />
                        <Image
                            src="/windows-icons/Volume.png"
                            alt=""
                            height={25}
                            width={25}
                            style={{ marginRight: "7px" }}
                        />
                    </MobileImageArrowContainer>
                )}
                <span>{currentTime}</span>
            </TimeTaskBar>
        </TaskBarContainer>
    );
};

export default WindowsTaskBar;
