# Password Generator

https://anafariya.github.io/password-generator/

This is a simple React application that generates passwords based on user preferences. The user can customize the password length, include numbers, and include special characters. The generated password can be copied to the clipboard with a single click.

![Screenshot (41)](https://github.com/anafariya/password-generator/assets/70438803/46d7ccce-5220-40e5-a6a3-dd5aa0783381)


## React Hooks Used

`useState`
* Description: useState is used to manage state variables in functional components. It allows components to maintain and update their state.
* Usage in Code:

```jsx

const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");


```
 `useCallBack`
* Description: useCallback is used to memoize functions, preventing unnecessary re-renders of components that depend on these functions.

* Usage in Code:

``` 
const passwordGenerator = useCallback(() => {
  // ... password generation logic
}, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClip = useCallback(() => {
  // ... password copying logic
}, [password]);
```
`useEffect`
* Description: useEffect is used to perform side effects in functional components. It is used for actions that should occur after rendering.

* Usage in Code:

``` 
useEffect(() => {
  passwordGenerator();
}, [length, charAllowed, numberAllowed]);

```
 `useRef`
* Description: useRef is used to create mutable object properties that persist across renders without causing re-renders when changed.

* Usage in Code:

``` 
const passwordRef = useRef(null);

```



## Getting Started

**Clone the repository to your local machine:**

   ```bash
   git clone <https://github.com/anafariya/password-generator-react>

Navigate to the project directory:
cd <password-generator-react>

Install dependencies:
npm install

Start the application:
npm start```


## Features

* *Password Length Slider*: Adjust the length of the password using a slider input.
* *Include Numbers*: Toggle to include numbers in the generated password.
* *Include Special Characters*: Toggle to include special characters in the generated password.


## Usage

1. *Open the application in your web browser.*

2. *Customize your password preferences using the provided options.*

3. *The generated password will be displayed in the input field.*

4. *Click the "Copy" button to copy the generated password to the clipboard.*

## Development

- This project uses React.

- The password generation logic is implemented in the `passwordGenerator` function.

- The application UI is styled using Tailwind CSS.

- Password copying functionality is handled by the `copyPasswordToClip` function.
