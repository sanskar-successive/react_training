import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
describe("Counter Component", () => {
  it("On clicking increment button", () => {
    render(<Counter />);
    const incBtn = screen.getByText("Inc");
    fireEvent.click(incBtn);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("On clicking decrement button", () => {
    render(<Counter />);
    const decBtn = screen.getByText("desc");
    fireEvent.click(decBtn);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
