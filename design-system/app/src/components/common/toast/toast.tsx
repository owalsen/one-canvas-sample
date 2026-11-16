export function Toast({ message }: { message: string }) {
  return <div className="ap-toast" role="status">{message}</div>;
}
