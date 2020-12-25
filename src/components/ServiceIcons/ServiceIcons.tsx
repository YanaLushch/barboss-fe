import React, { FC } from "react";
import { Barber, serviceIconsMap } from "../../api/Barber";
import { Container } from "./ServiceIcons.styles";
import { ServiceIcon } from "../ServiceIcon";

type ServiceIconsProps = {
  services: Barber["additionalServices"];
};

export const ServiceIcons: FC<ServiceIconsProps> = ({ services: barber }) => {
  return (
    <Container>
      {barber.map((item) => {
        return <ServiceIcon key={item} f7={serviceIconsMap[item]} />;
      })}
    </Container>
  );
};

ServiceIcons.displayName = "ServiceIcons";

export default ServiceIcons;
