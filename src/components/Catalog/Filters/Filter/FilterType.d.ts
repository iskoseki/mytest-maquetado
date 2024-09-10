export type FilterProps = {
  name: string;
  options: string[];
  onChange: (selected: string | null) => void;
  selectedOption?: string | null;
};