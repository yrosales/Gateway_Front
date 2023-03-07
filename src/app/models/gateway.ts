import { Device } from "./device";

export interface Gateway {
  serial: string;
  name: string;
  address: string;
  devices?: Device[];
}
