import { render } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("header image must have correct src & alt", () => {
    const { getByRole } = render(<App />);
    const logo = getByRole("img");

    expect(logo).toHaveAttribute(
      "src",
      "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
    );

    expect(logo).toHaveAttribute("alt", "nasaLogo");
  });
});
