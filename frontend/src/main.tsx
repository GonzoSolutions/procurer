//
// main.tsx
//

import React from "react";
import ReactDOM from "react-dom/client";

//
//

import App from "./app";

//
//

const element = document.createElement('div');
element.id = 'root';

//
//

document.body.append(element);

//
//

const root = ReactDOM.createRoot(element);
root.render(<App />);

//
//
