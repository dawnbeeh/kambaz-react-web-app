import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <div>
        <p>Name: Dawnbee Hwang (hwang.daw@northeastern.edu)</p>
        <p>Section: CS5610 Summer2025 41980</p>
        <p>GitHub: <a href="https://github.com/dawnbeeh/kambaz-react-web-app" target="_blank">https://github.com/dawnbeeh/kambaz-react-web-app</a></p>
        </div>
        <TOC />
        { /* Routes change the contents based on the URL */ }
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2/*" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
          <Route path="Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
}
