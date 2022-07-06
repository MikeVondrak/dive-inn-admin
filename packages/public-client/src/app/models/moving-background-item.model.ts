import { Breakpoints } from "../services/viewport/viewport.service";

export type CssProp = [prop: string, value: string];
export type Coord = [x: number, y: number];

export interface MovingBackgroundItem {
  coords: Map<Breakpoints, Coord>,
  width: Map<Breakpoints, number>,
  height: Map<Breakpoints, number>,
  styles: Map<Breakpoints, CssProp[]>,
}