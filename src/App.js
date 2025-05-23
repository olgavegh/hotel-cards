import logo from "./logo.png";
/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";

import {
  CardWrapper,
  ImageWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  ActionsWrapper,
  Button,
  PrimaryButton,
  SecondaryButton,
  theme,
  LogoSpin,
} from "./styles";

// import styled components, theming and animation from "./styles.js" file

const hotels = [
  {
    id: 1,
    src: "images/hotel-leisure.jpeg",
    alt: "",
    title: "Hotel Leisure",
    description: "Enjoy world-class shopping in the heart of the city.",
  },
  {
    id: 2,
    src: "images/hotel-paradise.jpeg",
    alt: "",
    title: "Hotel Paradise",
    description: "Enjoy open-air spaces, waterfront dining, and poolside fun.",
  },
  {
    id: 3,
    src: "images/hotel-holiday.jpeg",
    alt: "",
    title: "Hotel Holiday",
    description: "Discover your home away from home.",
  },
];

// Apply styling to code within the `App` component's `return` statement using styled components, theming, animation and the `css` prop
function App() {
  return (
    <ThemeProvider theme={theme}>
      <main
        css={(theme) => ({
          color: theme.colors.primary,
          background: theme.colors.tertiary,
          height: "100vh",
          fontFamily: theme.fonts.primary,
        })}
      >
        <img
          src={logo}
          alt="logo"
          css={css`
            display: absolute;
            margin-top: 15px;
            margin-left: 15px;
            height: 100px;
            width: 100px;
            animation: ${LogoSpin} 10s linear infinite;
          `}
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            padding: 20px;
            flex-wrap: wrap;
          `}
        >
          {hotels.map((hotel) => {
            return (
              <CardWrapper key={hotel.id}>
                <ImageWrapper src={hotel.src} alt={hotel.alt} />
                <TextWrapper>
                  <TitleWrapper>{hotel.title}</TitleWrapper>
                  <DescriptionWrapper>{hotel.description}</DescriptionWrapper>
                </TextWrapper>
                <ActionsWrapper>
                  <SecondaryButton>Details</SecondaryButton>
                  <PrimaryButton>Book</PrimaryButton>
                </ActionsWrapper>
              </CardWrapper>
            );
          })}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
