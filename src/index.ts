function sayHi(name: string): string {
  return `Hi, ${name}!`;
}

// const s: string = 2;
const externalLib: typeof ExternalLibExample = { version: 1 };
console.log(externalLib);

console.log(sayHi('Rey'));

export { sayHi };
