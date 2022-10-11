// Miejsce na wszelkie funkcje pomocnicze oraz funkcje typu type guards

import { ErrorsEnum } from './enums';

// Funkcja formatująca wartość otrzymaną w pierwszym parametrze na docelową w zależności od otrzymanego accessora w drugim parametrze
export const formatData = (accessor: string, data: string | number) => {
  const date = typeof data === 'string' && accessor === 'Date';
  const value = typeof data === 'number' && accessor === 'Value';

  if (date) {
    return data.split('T')[0].split('-').reverse().join('-');
  }

  if (value) {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    }).format(data);
  }

  return data;
};

// Asercja - weszła do użytku, z którąś z nowszych edycji TS
export function assertIfIsOfGivenType<T>(
  input: unknown,
  errorMessage?: string
): asserts input is T {
  const instance = input as T;
  if (!(instance instanceof Object)) {
    throw new Error(errorMessage || ErrorsEnum.type);
  }
}

// Przykład asercji dla tablicy
export function assertIfAreOfGivenType<T>(
  input: unknown,
  error?: string
): asserts input is T {
  const instance = input as T[];
  if (!(instance instanceof Array)) {
    throw Error(error || ErrorsEnum.type);
  }
  instance.every((element) => assertIfIsOfGivenType(element, error));
}
