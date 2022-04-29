// Decorators is experimental on EcmaScript

/**
 *Active in tsconfing.json
 *@name "experimentalDecorators": true
 */

// @Component
// @Selector
// @useState("asdf")

// Create a decorator

function log(target: any) {
  console.log(target);
}

@log
class Bar {}

// custom decorator with factory

function logger(prefix: string) {
  return (target) => {
    console.log(`${prefix} - ${target}`);
  };
}

@logger("awesome")
class Foo {}

// ====================================== //

// Class decorator

// create a class decorator (entity)

function setAPIVersion(apiVersion: string) {
  return (target) => {
    return class extends target {
      version = apiVersion;
    };
  };
}

@setAPIVersion("1.0.0")
class API {}

console.log(new API());

// ====================================== //

// Property decorator

// Create a property decorator (validation)

function minLength(lenght: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < lenght) {
        console.log(`Error: you can't create ${key} less than ${lenght}.`);
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validation (most common property decorator)
  // less than 5 character - error
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("Baby Driver");
console.log(movie);

// ====================================== //

// Method decorator

// Create a method decorator (delay)

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // return console.log in all params
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: Array<any>) {
      console.log("Waiting ${ms}...");
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // Create a delay method
  @delay(2000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const littlePerson = new Greeter("Little Person!");
littlePerson.greet();

// Parameter decorator
// Acessor decorator
