import { fireEvent, render, screen } from "@testing-library/react";
import ModalComponent from "./TestModal";
test("Check If Everything working", () => {
  render(<ModalComponent />);
  const open = screen.getByText("Open modal");
  expect(open).toBeInTheDocument();
  fireEvent.click(open);
  const close = screen.getByText("Close modal");
  expect(close).toBeInTheDocument();
  fireEvent.click(close);
  expect(screen.queryByText("This is Modal")).not.toBeInTheDocument();
});
