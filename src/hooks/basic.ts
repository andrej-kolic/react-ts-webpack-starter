import React from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const previousInputRef = React.useRef<T>(value);
  const previousValueRef = React.useRef<T>();

  if (value !== previousInputRef.current) {
    previousValueRef.current = previousInputRef.current;
    previousInputRef.current = value;
  }

  return previousValueRef.current;
}
