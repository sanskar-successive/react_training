import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Login form", () => {
  it("on input username", () => {
    render(<LoginForm />);
    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "Sanskar" } });
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    const submitBtn = screen.getAllByTestId("btn");
    fireEvent.click(submitBtn);
    expect(screen.getByText("Sanskar 12345"));
  });
});
