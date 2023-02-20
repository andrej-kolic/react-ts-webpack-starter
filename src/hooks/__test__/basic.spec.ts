import { renderHook } from '@testing-library/react';

import { usePrevious } from '../basic';

describe('usePrevious', () => {
  it('should get undefined for initial call', () => {
    const { result } = renderHook((value = 1) => {
      return usePrevious(value);
    });
    expect(result.current).toEqual(undefined);
  });

  it('should get previous value', () => {
    const { result, rerender } = renderHook((value = 1) => {
      return usePrevious(value);
    });
    rerender(2);
    expect(result.current).toEqual(1);
  });

  it('should have consistent output during re-renders', () => {
    const { result, rerender } = renderHook((value = 1) => {
      return usePrevious(value);
    });
    rerender(2);
    rerender(2);
    rerender(2);
    expect(result.current).toEqual(1);
  });

  it('should create context per call', () => {
    const { result, rerender } = renderHook((value = 1) => {
      return [usePrevious(value), usePrevious((value as number) + 100)] as number[];
    });
    expect(result.current).toEqual([undefined, undefined]);
    rerender(2);
    expect(result.current).toEqual([1, 101]);
  });
});
