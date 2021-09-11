import React from "react";

function Calculator() {
  return (
    <div className="calculator-bg">
      <div className="calculator">
        <input
          type="text"
          id="display"
          className="calculator-screen"
          placeholder="0"
          disabled
        />
        <div className="calculator-keys">
          <button
            type="button"
            id="clear"
            className="all-clear"
            value="all-clear"
          >
            C
          </button>

          <button type="button" id="equals" className="equal-sign" value="=">
            =
          </button>

          <button type="button" id="divide" className="operator" value="/">
            &divide;
          </button>

          <button type="button" id="open" className="operator" value="(">
            {"("}
          </button>

          <button type="button" id="close" className="operator" value=")">
            {")"}
          </button>

          <button type="button" className="operator" value="*" id="multiply">
            &times;
          </button>
          <button type="button" className="operator" value="-" id="subtract">
            -
          </button>
          <button type="button" className="operator" value="+" id="add">
            +
          </button>

          <button type="button" className="operator" value="sqrt" id="sqrt">
            &#8730;
          </button>

          <button type="button" id="exponential" className="operator" value="^">
            x^
          </button>

          <button type="button" id="seven" value="7">
            7
          </button>
          <button type="button" id="eight" value="8">
            8
          </button>
          <button type="button" id="nine" value="9">
            9
          </button>
          <button type="button" id="four" value="4">
            4
          </button>
          <button type="button" id="five" value="5">
            5
          </button>
          <button type="button" id="six" value="6">
            6
          </button>
          <button type="button" id="one" value="1">
            1
          </button>
          <button type="button" id="two" value="2">
            2
          </button>
          <button type="button" id="three" value="3">
            3
          </button>
          <button type="button" id="zero" value="0">
            0
          </button>
          <button type="button" id="" value="<">
            &lt;
          </button>
          <button type="button" id="decimal" className="decimal" value=".">
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
