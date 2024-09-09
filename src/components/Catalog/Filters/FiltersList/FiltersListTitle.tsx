type FiltersListTitleProps = {
  onClick?: () => void;
  title: string;
};

export const FiltersListTitle: React.FC<FiltersListTitleProps> = ({
  onClick,
  title,
}) => {
  return (
    <h5 className="filters__list-title" onClick={onClick}>
      {title}
    </h5>
  );
};
