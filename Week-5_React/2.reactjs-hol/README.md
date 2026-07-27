# React Hands-on Lab 2: Understanding React Components

This file contains the theoretical explanations for the lab objectives and the completed steps to create and run your Student Management Portal components.

---

## Part 1: Theory and Core Concepts

### 1. React Components
* **Definition**: Components are the foundational building blocks of a React application. They represent self-contained, modular, and reusable units of UI. By dividing the user interface into independent components, developers can build complex interfaces incrementally and manage each piece in isolation.
* Components receive input through **Props** and return React elements describing what should appear on the screen.

---

### 2. Differences Between Components and JavaScript Functions

| Feature | React Component | JavaScript Function |
| :--- | :--- | :--- |
| **Return Type** | Must return JSX (React elements) representing user interface structure. | Can return any JavaScript data type (string, number, array, object, undefined, etc.). |
| **Naming Convention** | Must start with a Capital letter (PascalCase) e.g., `<Home />`. | Typically starts with a lowercase letter (camelCase) e.g., `calculateTotal()`. |
| **Invocation Syntax** | Invoked using XML-like markup tags (e.g. `<Home />` or `<Home></Home>`). | Called using parenthesis and arguments (e.g. `calculateTotal(5, 10)`). |
| **State & Hooks** | Can hold internal state (`useState`) and hook into the rendering lifecycle. | Does not have built-in state management or lifecycle mechanics. |

---

### 3. Types of Components
React supports two primary types of components:
1. **Functional Components**: Plain JavaScript functions that accept props and return JSX. They are the modern standard in React development.
2. **Class Components**: ES6 classes that extend `React.Component` and include a `render()` method.

---

### 4. Class Components
* **Definition**: Class components are ES6 classes that extend from `React.Component`.
* **Key Properties**:
  * Must define a `render()` method that returns JSX.
  * Historically, they were the only components that could maintain local state (`this.state`) and use lifecycle hooks (like `componentDidMount` and `componentWillUnmount`).
  * Example:
    ```javascript
    class Home extends React.Component {
      render() {
        return <h1>Home Page</h1>;
      }
    }
    ```

---

### 5. Functional Components
* **Definition**: Functional components are simpler JavaScript functions that take `props` as a single parameter and return JSX.
* **Key Properties**:
  * Easier to write, read, and test compared to Class components.
  * Since the introduction of **React Hooks** in version 16.8, functional components can handle state (`useState`) and side effects (`useEffect`), making them the preferred way of writing components.
  * Example:
    ```javascript
    function Home(props) {
      return <h1>Home Page</h1>;
    }
    ```

---

### 6. Component Constructor (Class Components)
* **Definition**: The constructor is a special method in a class component that runs automatically before the component is mounted (inserted into the DOM).
* **Key Purposes**:
  * **Initializing State**: Defining the initial state by assigning an object to `this.state`.
  * **Binding Event Handlers**: Binding methods to the class instance (e.g. `this.handleClick = this.handleClick.bind(this)`) so `this` is correctly resolved inside the handler.
* **Rule**: You must call `super(props)` as the very first line inside the constructor. This calls the parent class (`React.Component`) constructor and initializes `this.props`.

---

### 7. The `render()` Function (Class Components)
* **Definition**: The `render()` method is the only mandatory method in a React class component.
* **Key Properties**:
  * It is called by React to build the virtual representation of the UI based on `this.props` and `this.state`.
  * It must be a **pure function**: it should not modify component state, it should return the same element structure for the same inputs, and it should not interact directly with the browser DOM.

---

## Part 2: Hands-on Lab Steps (Completed Manual)

Below are the completed instructions for the hands-on lab, filling in all command and code blanks:

### 1. Create a React project named "StudentApp"
Note: NPM naming restrictions do not allow uppercase letters in package names. We create the project as `studentapp` (lowercase) to conform, but represent it as `StudentApp` inside the portal. Run:
```bash
npx create-react-app studentapp
```

### 2. Create a "Components" folder and "Home.js"
* Navigate to the project and create a folder under `src/` named `Components`.
* Add a new file inside named `Home.js`.

### 3. Type the following code in Home.js
* In `src/Components/Home.js`, write the component to display the welcome message:
```javascript
import React from 'react';

function Home() {
  return (
    <div className="component-card home-card">
      <h3>Home Panel</h3>
      <p>Welcome to the Home page of Student Management Portal</p>
    </div>
  );
}

export default Home;
```

### 4. Create About.js and Contact.js
* Create `About.js` and `Contact.js` inside the `src/Components/` folder.

### 5. Type the code for About and Contact components
* In `src/Components/About.js`:
```javascript
import React from 'react';

function About() {
  return (
    <div className="component-card about-card">
      <h3>About Panel</h3>
      <p>Welcome to the About page of the Student Management Portal</p>
    </div>
  );
}

export default About;
```
* In `src/Components/Contact.js`:
```javascript
import React from 'react';

function Contact() {
  return (
    <div className="component-card contact-card">
      <h3>Contact Panel</h3>
      <p>Welcome to the Contact page of the Student Management Portal</p>
    </div>
  );
}

export default Contact;
```

### 6. Edit App.js to invoke all components
* Replace the content of `src/App.js` with:
```javascript
import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="portal-header">
        <h1>Student Management Portal</h1>
      </header>
      <main className="portal-content">
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
```

### 7. Navigate and execute the code
* Navigate into the project folder and run the start command:
```bash
cd studentapp
npm start
```

### 8. Open the browser
* Open your browser and navigate to:
```text
http://localhost:3000
```

---

## Part 3: Steps to Run in VS Code

1. **Launch VS Code**.
2. Go to **File -> Open Folder...** and select:
   `c:\Users\nikhi\OneDrive\Desktop\COGNIZANT\Week-5_React\2.reactjs-hol\studentapp`
3. Open the VS Code integrated terminal (`Ctrl + ``).
4. Run the application:
   ```bash
   npm start
   ```
5. The application will compile and open automatically in your browser at `http://localhost:3000`.
