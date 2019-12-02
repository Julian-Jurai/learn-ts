# What is typescript ?

- A super set of javascipt
- Can't be executed by js engines, browser, node.js
- TS is compiled to js
- Catches possible run-time errors during compile time aka during development

- when you access the value from an input element you always get a string
- autocompletion + IDE itegration
- next gen js features (similar to babel but by default)

Core Types
number - int/floats
string - all text values
boolean - true/false
object - {age: number}
array - string[]
tuple - fixed and type length array - [number, string]. We get reassingment and index type support but NOT support for push methods
enum - We can default/set the start of the enum value.
any - avoid when possible
Function - useful when a vairable is expected to be a function type
union - useful when multiple types are allowed.
void - nothing esentially undefined but functions are differenctiated with void
unknown - this is different to any and provides typechecking that any doesn;t provide
never - useful when functions expect to never return, error utils, inifite loops
literal-types - similar to enums but useful if variations number is low

Type Alias
Usefule for type setups that are reused

Literal types
The value is the exact type. i.e let a = 2, a is thus 2

Return Types
this can be explicit or inferred

Type inference is a unique feature of typescrpipt that attempts to identify what an object/value is based on the assignment/reassignment

Best Practices:

assign type when declaring non explicit variables
let a: number;

any - avoid when possible

enums should start with a capital letter, values should be all caps

avoid explicit returns unless otherwise, depend on the typescript inferrence

set void as the return statemet when functions are expected to return nothing

when defining a variable as a function type we should be explictit with the interface

When the input is unkown we should use unknown istead of any and use type checking logic since we'll still get some typescheking. With any we wont

When an error is thrown nothing is returned, no undefined no nulls. In this case when we throw an error we should type the return to be never
