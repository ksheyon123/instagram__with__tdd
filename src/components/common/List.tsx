interface IListProps {
  items: ListItem[];
  onClick?: (e: ListItem) => void;
}

export const List: React.FC<IListProps> = ({ items, onClick }) => {
  return (
    <div>
      {items.map(({ name, child }, idx) => (
        <div>
          <div>{name}</div>
          {child && child}
        </div>
      ))}
    </div>
  );
};

type ListItem = {
  name: string;
  child?: React.ReactNode;
};
