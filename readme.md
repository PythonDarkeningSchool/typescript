

# Pre-requisites



## Install an IDE

Visual Studio Code is recommended to use it

[Visual Studio Code](https://code.visualstudio.com)

## Installing TypeScript

Install from the official website

This step could apply to only download an editor

[TypeScript webpage](https://www.typescriptlang.org)

### Install from the CMD

```bash
npm install -g typescript

```

| This installation must be performed in the root folder of the project MultiMath previously downloaded

## Install nodeJS

Install from the official website

[nodeJS](https://nodejs.org)

## Configuration files

### task.json

In root folder create the folder `.vscode` and inside that folder the file `tasks.json` with the following content

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "TypeScript Compiler",
            "type": "shell",
            "command": "tsc",
            "args": [
                "-p",
                ".vscode/../vendingmachine/ts"
            ],
            "problemMatcher": "$tsc",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

### tsconfig.json

Inside to your ts folder create the file `tsconfig.json` with the following content

```json
{
    "compilerOptions": {
        "target": "es5",
        "outFile": "../js/app.js",
        "sourceMap": true
    }
}
```



# What is TypeScript

## TypeScript

- Open source
- Maintained by Microsoft
- Transpiles to a configurable JavaScript version
- Uses ES6/ES7 sintax if possible
- Adds typing

*In my personal point of view, `TypeScript` it is a lenguage to enhance the main `JavaScript` lenguage making it kind of  `Java` like a typed lenguage.*

### Benefits of a typed language

- Mistakes are detected up front
- Less bugs
- Autocomplete/Intellisense
- Makes endless type checking unnecesary
-  Bottom line: it saves you a lot of time



## The compiler

The `TypeScript` compiler is called *`tsc`* (type script compiler), it convert TypeScript code to JavaScript.

The browsers does not understand TypeScript code, the compiler is available in many OS such as windows, mac and Linux.



# Coding

## Ending line

In TypeScript is optional to end each line with a `;`

## Data types

The first data type is the ones that comes with TypeScript

| Built-in | Comment                                                      |
| -------- | ------------------------------------------------------------ |
| boolean  | can contains true o false value                              |
| string   | can contains a sequence of characters surrounded by quotes   |
| number   | any type of number such as int, float, double, negative, positive etc. |
|          |                                                              |

The second data type is the created by the developer

| Custom    | Comment |
| --------- | ------- |
| enum      |         |
| array     |         |
| interface |         |
| class     |         |
|           |         |

## Naming conviction

### Class

The naming conviction for class is PascalCase

### Methods or functions

The naming conviction for methods or functions is camelCase



## Class structure

```typescript
class SomeClass {
    // code here
}
```

## Class atributtes

```typescript
variableName: typeOfVariable = <value>;
```



## Imports

```typescript
/// <reference path="<path>/<file.ts>" />
```



## Method or function structure

#### Without arguments

```typescript
someMethod(): returnTypeValue {
    // code here
}
```

#### With arguments

```typescript
someMethod(<variableName>: <dataType>): returnTypeValue {
    // code here
}
```

## Arrow functions

| Arrow functions are also know as `lambdas` in others lenguages.

#### Arrow functions as method

```typescript
methodName = (<variable>: <variableType>): returnType => {
 	// code here   
}
```

#### Arrow functions in a variable

| Just like in `JavaScript` it is also possible to have *arrow functions* directly in a variable

```typescript
let <variableName> = (<variable>: <variableType>): returnType => {
 	// code here   
}
```



Considerations

1. if the implementation of the function only consist in one line you do not have to use curly braces `{}`
   1. When using an arrow function without curly braces `{}` you always have to *return* something
2. If you have to use multiples lines you need the curly braces `{}`
3. `*This*` keyword in arrow function always refers to the object (of the class) the function is in

### Reference to class atributtes

```
this.variableName
```

| To refere to some global attribute on the class level we have to use `this`  *keyword*

## Variables

| In TypeScript every variable is assing to a data type unlike to JavaScript where you can assing any type to every variable you declare

```typescript
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

## Type inference

### Variables

| TypeScript wont let you `reassignment of variables` of different type, e.g:

#### Explicitly

```
var number: value = .25; // define and initialize the variable
number = "String"; // the error you will get: type "String" is not assignable to type number
```

#### Implicitly

```typescript
value = .25; // define and initialize the variable
number = "String"; // the error you will get: type "String" is not assignable to type number
```

### Methods or functions

The same can be applied to `methods or functions`, e.g:

#### Explicitly

```typescript
methodName(): string {
    return "String"
}
```

#### Implicitly

```typescript
methodName(): {
    return "String"
}
```

## Encapsulation

| Same as `Java`, in TypeScript we can use the encapsulation programming principle

e.g in class

```typescript
// Defining the class
class SomeClass {
    private <dataType>: <variableName> = <value>;
}

// Instantiate the class
let coin = new Quarter();
coin.variableName; // an error occured because the variableName is only accesible within the class


```

## Getters and Setters

| Similar than `java` we can define *getters* and *setters* to change the properties within a class

For conviction the `getters` and `setters` names will be writen with *PascalCase* inlike the `methods`.

In TypeScript the `getters` and `setters` has their own keyword unlike `java` which are:

- get => to define a getter

- set => to define a setter

#### Getters

```typescript
class SomeClass {
    private <dataType>: <variableName> = <value>;
    // Define the getters
    get Value(){
        return this.<variableName>;
    }
}
```

#### Setters

```typescript
class SomeClass {
    private <dataType>: <variableName> = <value>;
    // Define the getters
    set Value(<newValue>: <dataType>){
        this.<variableName> = <newValue>;
    }
}
```

## Enums

```typescript
enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

<variableName> = VendingMachineSize.medium;
```



| Benefits of *_Enums_*

1. Constraint
   1. It can act as a contraint
2. Maintainability of Code
   1. It can increase the maintainability of code
3. Readability of Code
   1. Code can become more readability using enums, because of the semantics of it

# Thid Party Libraries

## Knockout.js

Knockout.js is a data binding library for `JavaScript`

[Download knockout library](https://knockoutjs.com/)

### Configuration

1. Create a folder inside `js` folder called `lib`
2. Download `knockout` JavaScript library and copy it to the previous folder
3. Open `index.html` and setup `knockout` before the `app.js` like this:

```html
<script src="js/lib/knockout-3.5.0.js"></script>
<script src="js/app.js"></script>
```

### Types definitions



TypeScript needs of the types definitions for `knockout`, please follow the next step in order to download and configurate it:

1. Download[[index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/knockout/index.d.ts)](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/knockout)
2. Create a folder in `ts/typings`
3. Rename the file downloaded to `knockout.d.ts` and place it in the create folder
4. (if any) do a reference in the files needed, like this

```typescript
/// <reference path="typings/knockout.d.ts"/>
```

[knockout webpage](https://www.npmjs.com/package/@types/knockout)

