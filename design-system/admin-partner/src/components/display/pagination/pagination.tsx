export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="ds-pager" aria-label="페이지네이션">
      <button type="button" disabled={page <= 1} onClick={() => onChange?.(page - 1)}>이전</button>
      {pages.map((p) => (
        <button type="button" key={p} aria-current={p === page ? 'page' : undefined} onClick={() => onChange?.(p)}>
          {p}
        </button>
      ))}
      <button type="button" disabled={page >= totalPages} onClick={() => onChange?.(page + 1)}>다음</button>
    </nav>
  );
}
