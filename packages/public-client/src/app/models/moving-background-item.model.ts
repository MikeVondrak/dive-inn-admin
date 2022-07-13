import { Breakpoints } from "../services/viewport/viewport.service";

export type CssProp = [prop: string, value: string];
export type Coord = [x: number, y: number];

export enum Orientations {
  LANDSCAPE,
  PORTRAIT,
}

export interface MovingBackgroundConfigs {
  bgSizes: Map<Breakpoints, string>,
  bgPositions: Map<Breakpoints, string>,
  textCoords?: Map<Breakpoints, Coord>,
  cssClasses?: Map<Breakpoints, string[]>,
}


export interface MovingBackgroundConfig {
  bgSize: string,
  bgPosition: string,
  textCoord?: Coord,
  cssClasses?: string[],
}