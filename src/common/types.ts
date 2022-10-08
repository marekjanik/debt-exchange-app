export type DebtType = {
  Adress: string;
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
