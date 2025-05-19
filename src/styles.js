import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    primary: "#283638",
    secondary: "#EDE9E0",
    tertiary: "#EDE9e0",
    quaternary: "#f8f3ed",
  },
  fonts: {
    primary: "helvetica",
  },
  fontSize: {
    primary: "1.5em",
    secondary: ".9em",
  },
};

export const LogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CardWrapper = styled.div`
  max-width: 350px;
  heigth: 325px;
  background: ${(props) => props.theme.colors.quaternary};
  border-radius: 10px;
  padding-botom: 0.4em;
  overflow: hidden;
`;

export const ImageWrapper = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;

export const TextWrapper = styled.div`
  padding: 1em 0.8em;
  height: 60px;
`;

export const TitleWrapper = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize.primary};
`;

export const DescriptionWrapper = styled.h3`
  margin-top: 0.6em;
  font-size: ${(props) => props.theme.fontSize.secondary};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.55;
`;

export const ActionsWrapper = styled.div`
  margin-left: 0.8em;
  padding: 1em 0;
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  margin-right: 10px;
  margin-top: 4px;
  border: 0;
  border-radius: 15px;

  padding: 10px 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: #${(props) => props.theme.colors.primary};
`;
