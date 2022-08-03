import { Breakpoints } from "../services/viewport/viewport.service";

//export type CssProp = [prop: string, value: string];
export type Coord = [x: string, y: string];

export interface MovingBackgroundConfig {
  width?: string,
  height?: string,
  bgSize?: string,
  bgPosition?: string,
  textCoord?: Coord,
  textWidth?: string,
  cssClasses?: string[],
}