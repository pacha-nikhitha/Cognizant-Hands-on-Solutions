# React Hands-on Lab 3: Functional Components & Styling

This file contains the theoretical explanations for the lab objectives and the completed steps to create and run your Student Score Calculator application.

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
| **Naming Convention** | Must start with a Capital letter (PascalCase) e.g., `<CalculateScore />`. | Typically starts with a lowercase letter (camelCase) e.g., `calculateAverage()`. |
| **Invocation Syntax** | Invoked using XML-like markup tags (e.g. `<CalculateScore />`). | Called using parenthesis and arguments (e.g. `calculateAverage(284, 300)`). |
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
    class CalculateScore extends React.Component {
      render() {
        return <h1>Score: 94.67%</h1>;
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
    function CalculateScore(props) {
      return <h1>Score: 94.67%</h1>;
    }
    ```

---

### 6. Component Constructor (Class Components)
* **Definition**: The constructor is a special method in a class component that runs automatically before the component is mounted (inserted into the DOM).
* **Key Purposes**:
  * **Initializing State**: Defining the initial state by assigning an object to `this.state`.
  * **Binding Event Handlers**: Binding methods to the class instance so `this` is correctly resolved inside the handler.
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

### 1. Create a React project named "scorecalculatorapp"
Run:
```bash
npx create-react-app scorecalculatorapp
```

### 2. Create a "Components" folder and "CalculateScore.js"
* Navigate to the project and create a folder under `src/` named `Components`.
* Add a new file inside named `CalculateScore.js`.

### 3. Type the following code in CalculateScore.js
* In `src/Components/CalculateScore.js`, write the component to calculate and display the score:
```javascript
import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, goal } = props;
  
  // Calculate average score percentage
  const score = ((Total / goal) * 100).toFixed(2);
  
  return (
    <div className="student-card">
      <h2 className="student-header">Student Details:</h2>
      <div className="student-info">
        <p className="student-field name-field">
          <span className="field-label">Name:</span> {Name}
        </p>
        <p className="student-field school-field">
          <span className="field-label">School:</span> {School}
        </p>
        <p className="student-field total-field">
          <span className="field-label">Total:</span> {Total}Marks
        </p>
        <p className="student-field score-field">
          <span className="field-label">Score:</span> {score}%
        </p>
      </div>
    </div>
  );
}

export default CalculateScore;
```

### 4. Create a folder named Stylesheets and add a file named "mystyle.css"
* Under the `src/` folder, create a new directory named `Stylesheets`.
* Create a file named `mystyle.css` inside `src/Stylesheets/`.
* Write the following stylesheet rules:
```css
.student-card {
  text-align: center;
  margin: 50px auto;
  max-width: 500px;
  font-family: Arial, sans-serif;
}

.student-header {
  color: rgb(150, 40, 40); /* Deep Red/Brown */
  font-size: 2.2rem;
  margin-bottom: 25px;
  font-weight: bold;
}

.student-field {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 10px 0;
}

.name-field {
  color: blue;
}

.school-field {
  color: red;
}

.total-field {
  color: purple;
}

.score-field {
  color: green;
}

.field-label {
  font-weight: bold;
}
```

### 5. Edit App.js to invoke CalculateScore functional component
* Replace the content of `src/App.js` with:
```javascript
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="Steeve" 
        School="DNV Public School" 
        Total={284} 
        goal={300} 
      />
    </div>
  );
}

export default App;
```

### 6. Navigate and execute the code
* Navigate into the project folder and run the start command:
```bash
cd scorecalculatorapp
npm start
```

### 7. Open the browser
* Open your browser and navigate to:
```text
http://localhost:3000
```

---

## Part 3: Steps to Run in VS Code

1. **Launch VS Code**.
2. Go to **File -> Open Folder...** and select:
   `c:\Users\nikhi\OneDrive\Desktop\COGNIZANT\Week-5_React\3.reactjs-hol\scorecalculatorapp`
3. Open the VS Code integrated terminal (`Ctrl + ``).
4. Run the application:
   ```bash
   npm start
   ```
5. The application will compile and open automatically in your browser at `http://localhost:3000`.
