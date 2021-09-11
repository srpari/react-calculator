import React, { useReducer } from "react";
import { Reducer } from "./Reducer";

const initialState = "";

function Calculator() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="calculator-bg">
      <div className="calculator">
        <input
          type="text"
          id="display"
          className="calculator-screen"
          placeholder="0"
          value={state}
          disabled
        />
        <div className="calculator-keys">
          <button
            type="button"
            id="clear"
            className="clear"
            value="clear"
            onClick={() => dispatch({ type: "clear", payload: "" })}
          >
            C
          </button>

          <button
            type="button"
            id="equals"
            className="equal-sign"
            value="="
            onClick={() => dispatch({ type: "result" })}
          >
            =
          </button>

          <button
            type="button"
            id="divide"
            className="operator"
            value="/"
            onClick={() => dispatch({ type: "expression", payload: "/" })}
          >
            &divide;
          </button>

          <button
            type="button"
            id="open"
            className="operator"
            value="("
            onClick={() => dispatch({ type: "expression", payload: "(" })}
          >
            {"("}
          </button>

          <button
            type="button"
            id="close"
            className="operator"
            value=")"
            onClick={() => dispatch({ type: "expression", payload: ")" })}
          >
            {")"}
          </button>

          <button
            type="button"
            className="operator"
            value="*"
            id="multiply"
            onClick={() => dispatch({ type: "expression", payload: "*" })}
          >
            &times;
          </button>
          <button
            type="button"
            className="operator"
            value="-"
            id="subtract"
            onClick={() => dispatch({ type: "expression", payload: "-" })}
          >
            -
          </button>
          <button
            type="button"
            className="operator"
            value="+"
            id="add"
            onClick={() => dispatch({ type: "expression", payload: "+" })}
          >
            +
          </button>

          <button type="button" className="operator" value="sqrt" id="sqrt">
            &#8730;
          </button>

          <button
            type="button"
            id="exponential"
            className="operator"
            value="^"
            onClick={() => dispatch({ type: "expression", payload: "^" })}
          >
            x^
          </button>

          <button
            type="button"
            id="seven"
            value="7"
            onClick={() => dispatch({ type: "expression", payload: 7 })}
          >
            7
          </button>
          <button
            type="button"
            id="eight"
            value="8"
            onClick={() => dispatch({ type: "expression", payload: 8 })}
          >
            8
          </button>
          <button
            type="button"
            id="nine"
            value="9"
            onClick={() => dispatch({ type: "expression", payload: 9 })}
          >
            9
          </button>
          <button
            type="button"
            id="four"
            value="4"
            onClick={() => dispatch({ type: "expression", payload: 4 })}
          >
            4
          </button>
          <button
            type="button"
            id="five"
            value="5"
            onClick={() => dispatch({ type: "expression", payload: 5 })}
          >
            5
          </button>
          <button
            type="button"
            id="six"
            value="6"
            onClick={() => dispatch({ type: "expression", payload: 6 })}
          >
            6
          </button>
          <button
            type="button"
            id="one"
            value="1"
            onClick={() => dispatch({ type: "expression", payload: 1 })}
          >
            1
          </button>
          <button
            type="button"
            id="two"
            value="2"
            onClick={() => dispatch({ type: "expression", payload: 2 })}
          >
            2
          </button>
          <button
            type="button"
            id="three"
            value="3"
            onClick={() => dispatch({ type: "expression", payload: 3 })}
          >
            3
          </button>
          <button
            type="button"
            id="zero"
            value="0"
            onClick={() => dispatch({ type: "expression", payload: 0 })}
          >
            0
          </button>
          <button
            type="button"
            id=""
            value="<"
            onClick={() => dispatch({ type: "del" })}
          >
            &lt;
          </button>
          <button
            type="button"
            id="decimal"
            className="decimal"
            value="."
            onClick={() => dispatch({ type: "expression", payload: "." })}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
