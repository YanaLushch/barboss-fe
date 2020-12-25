import React, { FC } from "react";
import { Container } from "./CardPicture.styles";
import profileURL from "../../assets/profile.svg";

type CardPictureProps = {
  backgroundURL?: string;
};

export const CardPicture: FC<CardPictureProps> = ({
  backgroundURL = profileURL,
}) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${backgroundURL})`,
        width: "100px",
        height: "100px",
        borderRadius: "50px",
      }}
    />
  );
};

CardPicture.displayName = "CardPicture";

export default CardPicture;
