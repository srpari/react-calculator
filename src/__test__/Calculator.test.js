import React from "react";
import { render } from "@testing-library/react";

import Calculator from "../components/Calculator";
import { calculateExp } from "../components/Reducer";

describe("Calculator", () => {
  test("Renders all buttons", () => {
    const component = render(<Calculator />);

    const clearButton = component.getByText("C");
    const equalsButton = component.getByText("=");
    const plusButton = component.getByText("+");
    const minusButton = component.getByText("-");

    const sevenButton = component.getByText("7");
    const eightButton = component.getByText("8");
    const nineButton = component.getByText("9");
    const openButton = component.getByText("(");

    const fourButton = component.getByText("4");
    const fiveButton = component.getByText("5");
    const sixButton = component.getByText("6");
    const closeButton = component.getByText(")");

    const oneButton = component.getByText("1");
    const twoButton = component.getByText("2");
    const threeButton = component.getByText("3");
    const exponentButton = component.getByText("x^");

    const decimalButton = component.getByText(".");
    const zeroButton = component.getByText("0");
    const delButton = component.getByText("<");

    //assert
    expect(clearButton).toBeDefined();
    expect(equalsButton).toBeDefined();

    expect(plusButton).toBeDefined();
    expect(minusButton).toBeDefined();
    expect(sevenButton).toBeDefined();
    expect(eightButton).toBeDefined();
    expect(nineButton).toBeDefined();
    expect(openButton).toBeDefined();

    expect(fourButton).toBeDefined();
    expect(fiveButton).toBeDefined();
    expect(sixButton).toBeDefined();
    expect(closeButton).toBeDefined();

    expect(oneButton).toBeDefined();
    expect(twoButton).toBeDefined();
    expect(threeButton).toBeDefined();
    expect(exponentButton).toBeDefined();

    expect(decimalButton).toBeDefined();
    expect(zeroButton).toBeDefined();
    expect(delButton).toBeDefined();
  });
});

describe("Calculator tests", () => {
  // const component = render(<Calculator />);
  test("Adding 1 + 2 should return 3", () => {
    // arrange and act
    var result = calculateExp("1 + 3");
    // assert
    expect(result).toBe(4);
  });

  test("Subtraction 160 - 40 should return 120", () => {
    // arrange and act
    var result = calculateExp("100 - 40");
    // assert
    expect(result).toBe(60);
  });

  test("Subtraction 100 - 120 should return -20", () => {
    // arrange and act
    var result = calculateExp("100 - 120");
    // assert
    expect(result).toBe(-20);
  });

  test("Multiply 6 * 4 should return 24", () => {
    // arrange and act
    var result = calculateExp("6 * 4");
    // assert
    expect(result).toBe(24);
  });

  test("Divide 125 / 5 should return 25", () => {
    // arrange and act
    var result = calculateExp("125 / 5");
    // assert
    expect(result).toBe(25);
  });

  test("With parentheses (125 / 5)+3 should return 28", () => {
    // arrange and act
    var result = calculateExp("(125 / 5)+3");
    // assert
    expect(result).toBe(28);
  });
});
