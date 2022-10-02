import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
import testData from "./testdata.json";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders No Results if empty array is passed as a prop", () => {
    render(<SearchResults results={[]} />);

    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("renders test data", () => {
    const { getAllByTestId } = render(<SearchResults results={testData} />);

    expect(getAllByTestId("test-result")).toHaveLength(3);
  });
});
