export interface BottomMenuProps {
  items: string[];
  current: string;
}

export function BottomMenu({ items, current }: BottomMenuProps) {
  return (
    <nav className="ap-bottom-menu">
      {items.map((item) => (
        <a href="#" key={item} aria-current={item === current ? 'page' : undefined} onClick={(e) => e.preventDefault()}>
          {item}
        </a>
      ))}
    </nav>
  );
}
