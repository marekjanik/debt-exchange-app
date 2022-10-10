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
