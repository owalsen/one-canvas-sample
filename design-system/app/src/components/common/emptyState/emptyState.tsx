import { NoDataSVG } from '../../icons/icons';

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="ap-empty">
      <NoDataSVG size={48} />
      <span>{message}</span>
    </div>
  );
}
