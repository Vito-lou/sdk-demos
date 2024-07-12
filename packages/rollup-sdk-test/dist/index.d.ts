// src/index.d.ts

declare class MySDK {
  constructor(name?: string);
  greet(): string;
  calculateSum(a: number, b: number): number;
}

declare const defaultInstance: MySDK;

export { MySDK, defaultInstance as default };
