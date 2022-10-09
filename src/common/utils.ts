// export const formatDate = (iso: string) => {
//   return iso.split('T')[0].split('-').reverse().join('-');
// };

// export const formatName = (name: string) => {
//   return name.replace(' (Test)', '');
// };

// export const formatValue = (value: number) => {
//   return new Intl.NumberFormat('pl-PL', {
//     style: 'currency',
//     currency: 'PLN',
//   }).format(value);
// };

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
