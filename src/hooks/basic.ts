import { useEffect, useRef } from 'react';

//

function use<T>(this: ReturnType<typeof getPrevValue<T>>, value: T) {
  if (value !== this.prevInput) {
    this.prevValue = this.prevInput;
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

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<ReturnType<typeof getPrevValue<T>>>(getPrevValue(value));
  return ref.current.use(value);
}

//

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

export function usePrevious5<T>(value: T): T | undefined {
  const ref = useRef<Previous<T>>(new Previous(value));
  return ref.current.use(value);
}

//

export function usePrevious4<T>(value: T): T | undefined {
  const ref = useRef<{ input: T; previous: T | undefined }>({
    input: value,
    previous: undefined,
  });

  if (value !== ref.current.input) {
    ref.current = { input: value, previous: ref.current.input };
  }

  return ref.current.previous;
}

//

export function usePrevious3<T>(value: T): T | undefined {
  const previousInputRef = useRef<T>(value);
  const previousValueRef = useRef<T>();

  if (value !== previousInputRef.current) {
    previousValueRef.current = previousInputRef.current;
    previousInputRef.current = value;
  }

  return previousValueRef.current;
}

//

export function usePrevious2<T>(value: T): T | undefined {
  const ref = useRef<T>();
  console.log('** value:', value);

  useEffect(() => {
    console.log('** value changed:', value);
    ref.current = value;
  }, [value]);

  console.log('** previous:', ref.current);
  return ref.current;
}
