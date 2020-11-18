import React, { useLayoutEffect, cloneElement, useRef, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";

import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-select";

function UseJQueryPlugin({ plugin, children, ...props }) {
  const ref = useRef();

  useLayoutEffect(() => {
    $(ref.current)[plugin](props);

    return () => {
      $(ref.current)[plugin]("destroy");
    };
  }, [ref.current]);

  const element = cloneElement(children, { ref });

  return element;
}

export default function App() {
  const [value, setValue] = useState("foobar");

  console.log(value);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UseJQueryPlugin plugin="selectpicker">
        <select
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        >
          <option value="foobar">Foobar</option>
          <option value="barfoo">Barfoo</option>
        </select>
      </UseJQueryPlugin>
    </div>
  );
}
