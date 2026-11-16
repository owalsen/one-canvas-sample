export function Backdrop({ onClick }: { onClick?: () => void }) {
  return <div className="ap-backdrop" onClick={onClick} />;
}
