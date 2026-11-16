export function Toast({ message }: { message: string }) {
  return <div className="ds-toast" role="status">{message}</div>;
}
