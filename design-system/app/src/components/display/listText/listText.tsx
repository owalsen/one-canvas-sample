export function ListText({ children }: { children: string }) {
  return <p className="ap-list-text"><span>•</span><span>{children}</span></p>;
}
