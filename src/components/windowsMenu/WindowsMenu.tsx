import { forwardRef } from "react";
import Image from "../image/Image";
import { LeftMenuContentContainer, LogOffButton, LogOffContainer, MenuButtonContainer, MenuContentContainer, ProgramsButton, RightMenuContentContainer, TurnOffButton, TurnOffContainer, UserInfoContainer, WindowsMenuContainer } from "./windowsMenu.styled"

const WindowsMenu = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <WindowsMenuContainer ref={ref}>
            <UserInfoContainer>
                <Image
                    src={`${import.meta.env.BASE_URL}/kon image.jpg`}
                    alt=""
                    height={40}
                    width={40}
                    style={{ borderRadius: "10%", border: "border: solid white" }}
                />
                <span>MartinTheGamz</span>
             </UserInfoContainer>
            <MenuContentContainer>
                <LeftMenuContentContainer>
                    <ProgramsButton></ProgramsButton>
                </LeftMenuContentContainer>
                <RightMenuContentContainer>
                </RightMenuContentContainer>
            </MenuContentContainer>
            <MenuButtonContainer> 
                <LogOffContainer>
                    <LogOffButton></LogOffButton>
                    <span>Log Off</span>
                </LogOffContainer>
                <TurnOffContainer>
                    <TurnOffButton></TurnOffButton>
                    <span>Turn Off Computer</span>
                </TurnOffContainer>
            </MenuButtonContainer> 
        </WindowsMenuContainer>
    );
});

export default WindowsMenu;