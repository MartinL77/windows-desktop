import styled from "styled-components";

export const WindowsMenuContainer = styled.div`
    /* background: linear-gradient(#1c5aab 1%, #5b8edb 60%, #1c5aab 99%); */
    background: linear-gradient(to top, #245edb 2%, #0c8dea 15%, #0c8dea 85%, #245edb 99% );
    border: solid 1px #0b4a9e;
    position: absolute;
    width: 50%;
    height: 65%;
    bottom: 7%;
    box-shadow: 3px 3px 10px #333, -2px 0px 5px rgba(20, 20, 20, 0.6) inset, 2px 0px 3px #7fbce8 inset;
    border-top-right-radius: 2%;
    border-top-left-radius: 2%;
    
    @media only screen and (min-width: 768px) {
        bottom: 5%;
        width: 30%;
    }
`

export const UserInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 12%;
    padding: 5px;

    span {
        margin: 10px 0 0 5px;
        color: white;
        font-family: Tahoma;
        font-size: 14px;
        font-weight: bold;
    }
`

export const MenuContentContainer = styled.div`
    background-color: white;
    height: 60%;


    @media only screen and (min-height: 768px) {
        height: 70%;
    }

    @media only screen and (min-height: 1024px) {
        height: 73%;
    } 

`

export const LeftMenuContentContainer = styled.div`

`

export const ProgramsButton = styled.button`

`

export const RightMenuContentContainer = styled.div`

`

export const MenuButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0 10px;
`

export const LogOffContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
        color: white;
        font-family: Tahoma;
        font-size: 14px;
        margin-left: 5px;
    }
`

export const TurnOffContainer = styled.div`
    display: flex;
    align-items: center;

    span {
        color: white;
        font-family: Tahoma;
        font-size: 14px;
        margin-left: 5px;
    }
`

export const LogOffButton = styled.button`
    height: 30px;
    width: 30px;
    background-color: yellow;
`

export const TurnOffButton = styled.button`
    height: 30px;
    width: 30px;
    background-color: red;
`