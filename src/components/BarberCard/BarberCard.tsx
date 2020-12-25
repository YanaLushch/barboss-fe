import React, { FC } from "react";
import { Barber } from "../../api/Barber";
import { Card } from "./BarberCard.styles";
import { CardPicture } from "../../components/CardPicture";
import { ServiceIcons } from "../ServiceIcons";
import { Icon } from "framework7-react";

type BarberCardProps = {
  barber: Barber;
};

export const BarberCard: FC<BarberCardProps> = ({ barber }) => {
  return (
    <Card>
      <CardPicture backgroundURL={barber.photoURL} />
      <div className="barber-info">
        <div className="barber-name">{barber.name}</div>
        <div className="barber-type">
          {barber.type}, {barber.distance}
        </div>
        <div className="barber-services">
          <ServiceIcons services={barber.additionalServices}> </ServiceIcons>(
          {barber.rank}) <Icon f7="star_fill" />
        </div>
        <div className="barber-price">~{barber.averagePrice}&#8372;</div>
      </div>
    </Card>
  );
};

BarberCard.displayName = "BarberCard";

export default BarberCard;
