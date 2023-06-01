type ItemsType = {
  items: string[];
};

export const List = ({ items }: ItemsType) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
