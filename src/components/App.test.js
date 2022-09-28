// App.test.js
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom'

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


const tree = TestRenderer.create(<App />);

it("renders correct heading", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("heading").textContent).toMatch(/our first test/i);
  });