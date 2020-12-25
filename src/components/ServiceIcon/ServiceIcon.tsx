import React, { FC } from "react";
import { Icon } from "framework7-react";
import { Container } from "./ServiceIcon.styles";
import { ReactComponent as MartiniIcon } from "../../assets/miu.svg";

export const customIconMap = {
  martini: <MartiniIcon />,
};

export type CustomIcon = keyof typeof customIconMap;

type ServiceIconProps = {
  slot?: string;
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  material?: string;
  f7: string;
  icon?: string;
  ios?: string;
  aurora?: string;
  md?: string;
  tooltip?: string;
  tooltipTrigger?: string;
  size?: string | number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  themeDark?: boolean;
};

export const ServiceIcon: FC<ServiceIconProps> = ({ f7, ...props }) => {
  return (
    <Container>
      {f7 in customIconMap ? (
        customIconMap[f7 as CustomIcon]
      ) : (
        <Icon {...props} f7={f7} />
      )}
    </Container>
  );
};

ServiceIcon.displayName = "ServiceIcon";

export default ServiceIcon;
