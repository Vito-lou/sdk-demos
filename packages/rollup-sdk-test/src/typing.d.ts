// src/index.d.ts

export class MySDK {
  constructor(name?: string);
  greet(): string;
  calculateSum(a: number, b: number): number;
}

declare const defaultInstance: MySDK;

export default defaultInstance;
