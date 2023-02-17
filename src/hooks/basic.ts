import { useEffect, useRef } from 'react';

// factory

function use<T>(this: ReturnType<typeof getPrevValue<T>>, value: T) {
  if (value !== this.prevInput) {
    this.prevValue = this.prevInput;
    this.prevInput = value;
  }
  return this.prevValue;
}

function getPrevValue<T>(initialValue: T) {
  return {
    prevInput: initialValue,
    prevValue: undefined as T | undefined,
    use,
  };
}

export function usePrevious_factoryImpl<T>(value: T): T | undefined {
  const ref = useRef<ReturnType<typeof getPrevValue<T>>>(getPrevValue(value));
  return ref.current.use(value);
}

// class

class Previous<T> {
  _previousInput: T;
  _previousValue: T | undefined;

  constructor(initialInput: T) {
    this._previousInput = initialInput;
  }

  use(currentValue: T): T | undefined {
    if (currentValue !== this._previousInput) {
      this._previousValue = this._previousInput;
      this._previousInput = currentValue;
    }
    return this._previousValue;
  }
}

export function usePrevious_classImpl<T>(value: T): T | undefined {
  const ref = useRef<Previous<T>>(new Previous(value));
  return ref.current.use(value);
}

// single ref

export function usePrevious_MultiRefImpl<T>(value: T): T | undefined {
  const ref = useRef<{ input: T; previous: T | undefined }>({
    input: value,
    previous: undefined,
  });

  if (value !== ref.current.input) {
    ref.current = { input: value, previous: ref.current.input };
  }

  return ref.current.previous;
}

// refs

// TODO: move up and add to other implementations
interface UsePrevious {
  <T>(value: T): T | undefined;
}

// export function usePrevious_RefImpl<T>(value: T): T | undefined {
export const usePrevious_RefImpl: UsePrevious = <T>(value: T) => {
  const previousInputRef = useRef<T>(value);
  const previousValueRef = useRef<T>();

  if (value !== previousInputRef.current) {
    previousValueRef.current = previousInputRef.current;
    previousInputRef.current = value;
  }

  return previousValueRef.current;
};

export const usePrevious: UsePrevious = usePrevious_RefImpl;

// return value from previous render

export function usePreviousRender<T>(value: T): T | undefined {
  const ref = useRef<T>();
  console.log('** value:', value);

  useEffect(() => {
    console.log('** value changed:', value);
    ref.current = value;
  }, [value]);

  console.log('** previous:', ref.current);
  return ref.current;
}
