import styled from "styled-components";

export const TaskBarContainer = styled.div`
    background: linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat;
    display: flex;
    height: 7%;

    @media only screen and (min-width: 768px) {
        height: 5%;
    }
`

export const StartTaskBarButton = styled.button`
    background: linear-gradient(to bottom, #66c765, #3c803c);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: solid #3c803c 2px;
    color: white;
    font-weight: bold;
    font-family: Tahoma;
    font-style: italic;
    font-size: 25px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 5px 40px 5px 0;

    &:hover {
        background: linear-gradient(to bottom, #75d174, #3f8b3f);
    }
`

export const TimeTaskBar = styled.div`
    background-color: #0593f3;
    border-top: solid #3582ea 2px;  
    border-left: solid #3582ea 2px;  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    @media only screen and (min-width: 520px) {
        padding: 0;
    }

    span {
        display: flex;
        position: absolute;
        text-transform: uppercase;
        color: white;
        font-family: Tahoma;
        top: 15%;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 35px;
        font-weight: bold;

        @media only screen and (min-width: 520px) {
            position: relative;
            display: flex; 
            width: 80px;
            top: 0;
            left: 0;
            transform: none;
            font-size: 16px;
            font-weight: normal;
        }
    }
`

export const ImageContainer = styled.div`
    display: none;
    padding: 0 15px 0 10px;

    @media only screen and (min-width: 520px) {
        display: flex; 
    }
`

export const TaskBarMainSection = styled.div`
    border-right: solid #374e79 1px;
    background: linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat;
    width: 100%;
`

export const MobileArrowButton = styled.button`
    display: flex;
    background-color: #0593f3;
    border-radius: 50%;
    border: solid #1b3c78 1px;
    width: 20px;
    height: 20px;
    justify-content: center;
    color: white;

    @media only screen and (min-width: 520px) {
        display: none; 
    }
`

export const MobileImageArrowContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #0593f3;
    border-left: solid #3582ea 2px;
    border-top: solid #3582ea 2px;
    right: 40px;
    height: 7%;
    padding: 0 10px;

    @media only screen and (min-width: 520px) {
        display: none; 
    }
`