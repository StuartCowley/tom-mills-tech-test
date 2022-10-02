import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Search {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button", () => {
    render(<Search {...validProps} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
