export const formatDate = (iso: string) => {
  return iso.split('T')[0].split('-').reverse().join('-');
};

export const formatName = (name: string) => {
  return name.replace(' (Test)', '');
};

export const formatValue = (value: number) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format(value);
};
