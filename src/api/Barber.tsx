export const serviceIconsMap = {
  "home-service": "car_fill",
  drinks: "martini",
  "card-payment": "creditcard_fill",
};

export type AdditionalServices = keyof typeof serviceIconsMap;

export interface Barber {
  id: string;
  type: "private barber" | "salon";
  photoURL: string;
  name: string;
  distance: string;
  additionalServices: AdditionalServices[];
  rank: number;
  averagePrice: number;
}

export class BarberApi {}
