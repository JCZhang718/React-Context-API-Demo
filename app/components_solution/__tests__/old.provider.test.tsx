import { act, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { CountContext } from "../context";
import CountProvider from "../provider";

describe('CountProvider', () => {
  describe('increment', () => {
    it('should increment the count value', () => {
      const TestComponent = () => {
        const { count, increment } = useContext(CountContext);
        return (
          <div>
            <span data-testid="count">{count}</span>
            <button onClick={increment}>Increment</button>
          </div>
        );
      };

      render(
        <CountProvider>
          <TestComponent />
        </CountProvider>
      );

      const countElement = screen.getByTestId('count');
      const buttonElement = screen.getByText('Increment');

      expect(countElement.textContent).toBe('0');
      act(() => {
        buttonElement.click();
      });
      expect(countElement.textContent).toBe('1');
    });
  })
})