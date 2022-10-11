/* Customowy hook udostępniający dane z API wraz z funkcją do ich pobierania, informacje o ewentualnym błędzie oraz o stanie ładaowania. */

import { useState, useCallback } from 'react';

import { ErrorsEnum, assertIfAreOfGivenType } from '../common';

export const useFetch = <TData>() => {
  const [fetchedData, setFetchedData] = useState<TData>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (url: string, options?: object) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}: ${ErrorsEnum.fetch}`);
      }

      const data = await response.json();
      assertIfAreOfGivenType<TData>(data);
      setFetchedData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
        console.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fetchedData,
    error,
    isLoading,
    fetchData,
  };
};
