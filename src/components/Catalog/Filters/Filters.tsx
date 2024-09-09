import "./styles.css";
import FiltersHead from "./FiltersHead/FiltersHead";
import FiltersList from "./FiltersList/FiltersList";

export default function Filters() {
  return (
    <div className="filters__container">
      <FiltersHead />
      <FiltersList />
    </div>
  );
}
