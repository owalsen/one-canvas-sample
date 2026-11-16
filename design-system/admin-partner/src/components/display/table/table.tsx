import type { ReactNode } from 'react';

export interface TableColumn<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  rows: T[];
  onRowClick?: (row: T) => void;
}

export function Table<T>({ columns, rows, onRowClick }: TableProps<T>) {
  return (
    <table className="ds-table">
      <thead>
        <tr>{columns.map((c) => <th key={c.key}>{c.header}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} data-clickable={onRowClick ? 'true' : 'false'} onClick={() => onRowClick?.(row)}>
            {columns.map((c) => <td key={c.key}>{c.render(row)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
