import { Text, Title } from "@/commons";
import styled from "styled-components";

export const LandingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  margin: 0;
  opacity: 1;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("/Looper.svg") #000;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    opacity: 0.05;
    z-index: -1;
  }
  @media (max-width: 768px) {
    height: max-content;
    &::before {
      background: url("/Wire.jpg") #000;
    }
  }
`;
export const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 15%;
    height: 100%;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const TextBody = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  position: relative;
  z-index: 1;
  opacity: 1;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: none;
    border: none;
    &::before {
      background: none;
    }
  }
`;
export const BodyImage = styled.div`
  width: 30%;
  height: 60vh;
  position: relative;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/Hands.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    background-blend-mode: lighten, normal;
    box-shadow: 2px 4px 41px -7px rgba(0, 129, 199, 0.2);
    backdrop-filter: blur(50px);
    border-radius: 5%;
    opacity: 0.5;
    z-index: -1;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    &::before {
      opacity: 1;
    }
  }
`;

export const LandingButton = styled.button`
  width: 200px;
  height: 44px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #ffd2ed;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  backdrop-filter: blur(50px);
  &:hover {
    background: #3396ff;
    border: none;
    background-blend-mode: lighten, normal;
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 150px;
  }
`;
export const LandingTitle = styled(Title)`
  font-size: 2rem;
  line-height: 2rem;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;
export const LandingText = styled(Text)`
  width: 100%;
  text-align: center;
  background-blend-mode: lighten, normal;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;
`;
export const Button = styled(LandingButton)`
  background: #3396ff;
  border: none;
  background-blend-mode: lighten, normal;
  &:hover {
    background: transparent;
    border: 1px solid #ffd2ed;
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;
export const TextCard = styled.div`
  background-blend-mode: lighten, normal;
  box-shadow: 2px 4px 41px -7px rgba(0, 129, 199, 0.2);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  width: 50%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 1px solid #ec9f05;
  background: linear-gradient(
    87.65deg,
    #fe5858 -10.89%,
    #ec9f05 -10.88%,
    #ff4e00 131.81%,
    #ff4e00 131.81%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 70%;
  }
`;
