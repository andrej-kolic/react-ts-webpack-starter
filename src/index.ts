function sayHi(name: string): string {
  return `Hi, ${name}!`;
}

console.log(2); // TODO: remove

const externalLib: typeof ExternalLibExample = { version: 1 };
console.log(externalLib);

console.log(sayHi('Rey'));

export { sayHi };
