// Generics

// Symbols:
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// Using type alias

type numOrStr = number | string;

// Create a new method. And making the types explicit with extend.
function useState<S extends numOrStr = string>() {
  //              ^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^
  //             defining generic           defining default
  // Making types more flexible.
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }
  return { getState, setState };
}

// Using new method state. And type unknown, defining its type.

const newState = useState<boolean>(); // ❌

const newState = useState<string>(); // ✅

// By setting the default in extend, you don't need to enter your type into the method.

const newState = useState(); // ✅

// newState.setState(123);
// console.log(newState.getState());

newState.setState("foo");
console.log(newState.getState());

newState.setState("bar");
console.log(newState.getState());
