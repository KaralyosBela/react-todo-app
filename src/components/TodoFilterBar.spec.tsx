import { fireEvent, render, screen } from "@testing-library/react";
import { setFilterOptions } from "../features/todosSlice";
import { TodoFilterBar } from "./TodoFilterBar";

// const mockDispatch = jest.fn();
// const mockUseDispatch = jest.fn(() => mockDispatch);
// const mockUseAppSelector = jest.fn();
// jest.mock('react-redux', () => ({
//     useDispatch: () => mockUseDispatch
//   })).mock('../app/hooks.ts', () => ({
//     useAppSelector: () => mockUseAppSelector()
//   }))

const mockUseAppSelector = jest.fn();
const mockDispatch = jest.fn();
const mockUseDispatch = jest.fn();
jest
  .mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
  }))
  .mock("../app/hooks.ts", () => ({
    useAppSelector: () => mockUseAppSelector(),
  }));

mockDispatch.mockReturnValue(mockUseDispatch);

describe("todo filter bar", () => {

  it("should call dispatch 2 times", () => {
    render(<TodoFilterBar />);

    const completeBtn = screen.getByTestId("completedBtn");
    const uncompleteBtn = screen.getByTestId("uncompletedBtn");
    fireEvent.click(completeBtn);
    fireEvent.click(uncompleteBtn);
    expect(mockDispatch).toBeCalledTimes(2);

  });

  it("should call dispatch with correct action", () => {
    render(<TodoFilterBar />);
    const completeBtn = screen.getByTestId("completedBtn");
    const uncompleteBtn = screen.getByTestId("uncompletedBtn");
    fireEvent.click(completeBtn);
    fireEvent.click(uncompleteBtn);
    expect(mockDispatch).toBeCalledWith(setFilterOptions("completed"));
    expect(mockDispatch).toBeCalledWith(setFilterOptions("uncompleted"));
  });
});
