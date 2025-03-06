import { act, renderHook } from "@testing-library/react";
import useCountContext from "../useContext";

describe('useCountContext', () => {
  it('should increment the count value', () => {
    const { result } = renderHook(() => useCountContext());

    act(() => {
      result.current.increment();
    })

    expect(result.current.count).toBe(1);
  })
})