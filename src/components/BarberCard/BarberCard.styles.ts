import { Card as _Card } from "framework7-react";
import styled from "styled-components";

export const Card = styled(_Card)`
  /* container styles here */
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: space-around;
  .barber-info {
    text-align: right;
    .barber-name,
    .barber-price {
      font-weight: 600;
      font-size: 18px;
    }
    font-weight: 200;
    .barber-services {
      display: inline-flex;
    }
    .barber-price {
      margin-top: 10px;
    }
  }
  .f7-icons {
    color: #39e991;
    font-size: 16px;
  }
`;
