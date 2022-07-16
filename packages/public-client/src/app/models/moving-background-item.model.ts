import { Breakpoints } from "../services/viewport/viewport.service";

export type CssProp = [prop: string, value: string];
export type Coord = [x: number, y: number];

export interface MovingBackgroundConfig {
  width: string,
  height: string,
  bgSize: string,
  bgPosition: string,
  textCoord?: Coord,
  cssClasses?: string[],
}