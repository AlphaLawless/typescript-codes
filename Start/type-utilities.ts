// Type utilities

// Partial<Type>
// Pick<Type, "property1" | "property2">
// Omit<Type, "property3">

// Create a simple type alias

type TodoT = {
  title?: string;
  description?: string;
  completed?: boolean;
};

// Mutation object ❌

const todo0: TodoT = {
  title: "Watch Dark again.",
  description: "Remember details.",
  completed: false,
};

console.log(todo0);

todo0.completed = true;

console.log(todo0);

// Readnonly (immutability principle) ✅

const todo1: Readonly<TodoT> = {
  title: "Watch Baby Steps again.",
  description: "Remember details.",
  completed: true,
};

console.log(todo1);

todo1.completed = true;

console.log(todo1);

// Pure function (iimutability principle) ✅

// Using Partial : to set as optional only what is to be changed. ✅

function updateTodo(todo: TodoT, fieldsToUpdate: Partial<TodoT>) {
  return { ...todo, ...fieldsToUpdate };
}

//If you create an instance just for one property, you need to leave the values optional.
// But this is a can be a very bad practice. ❌

const todo2: TodoT = updateTodo(todo1, { completed: false });

// =============More Type Utilities================= //

// Using Pick

type TodoPreview = Pick<TodoT, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Finished Ghost of Tsushima",
  completed: false,
};

// Using Omit

type TodoPreview2 = Omit<TodoT, "description">;

const todo4: TodoPreview = {
  title: "Finished Ghost of Tsushima",
  completed: false,
};
