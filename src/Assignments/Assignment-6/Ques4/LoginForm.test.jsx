import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

describe("Login form", () => {
  it("on input username", () => {
    render(<LoginForm />);
    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "abc" } });
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "123" } });
    const submit = screen.getByTestId("submitBtn");
    fireEvent.click(submit);
    expect(screen.getByText("Login successful")).toBeInTheDocument();
  });
});
