export class MySDK {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, ${this.name}!`;
  }

  calculateSum(a: number, b: number): number {
    return a + b;
  }
}

// Export a default instance for easier usage
export default new MySDK("Default User");
