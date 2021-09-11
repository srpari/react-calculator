import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Calculator from "../components/Calculator";

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

  test("resets when C is clicked", () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText("0")[0];

    const sevenButton = component.getByText("7");
    const clearButton = component.getByText("C");

    fireEvent.click(sevenButton);

    expect(calculatorDisplay).toHaveTextContent("7");

    fireEvent.click(clearButton);

    expect(calculatorDisplay).toHaveTextContent("0");
  });
});
