import React from "react";
import { render } from "@testing-library/react";
import LaunchPad from "./LaunchPad";

test("render LaunchPad Component Only once", async() => {
  const useEffectSpy = jest.spyOn(React, "useEffect");
  render(<LaunchPad />);
  jest.advanceTimersByTime(3000);
  expect(useEffectSpy).toHaveBeenCalledTimes(1)
});
