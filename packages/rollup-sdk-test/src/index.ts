export class MySDK {
  private name: string;

  constructor(name: string = "Default User") {
    this.name = name;
  }

  greet(): string {
    return `Hello, ${this.name}!`;
  }

  calculateSum(a: number, b: number): number {
    return a + b;
  }
}

export default new MySDK();
