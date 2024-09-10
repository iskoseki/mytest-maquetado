import { FiltersListTitleProps } from "./FilterListTypes";

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
