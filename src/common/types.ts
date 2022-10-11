/* Tutaj trzymam wszystkie reużywalne typy występujace w projekcie. */

export type DebtType = {
  Address: string;
  Date: string;
  DocumentType: string;
  Id: number;
  NIP: string;
  Name: string;
  Number: string;
  Price: number;
  Value: number;
};

export type ColumnType = {
  label: string;
  accessor: string;
  sortable: boolean;
  sortByOrder?: 'asc' | 'desc';
};
