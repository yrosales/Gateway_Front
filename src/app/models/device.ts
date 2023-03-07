import { Gateway } from "./gateway";

export interface Device {
  uid: number;
  vendor: string;
  created: Date;
  gateway?: Gateway;
}
