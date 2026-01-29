import { Health } from "../../types/character";

interface Props {
  selected: Health[];
  onChange: (h: Health[]) => void;
}

const options: Health[] = ["Healthy", "Injured", "Critical"];

export function HealthFilter({ selected, onChange }: Props) {
  const toggle = (value: Health) => {
    onChange(
      selected.includes(value)
        ? selected.filter(v => v !== value)
        : [...selected, value]
    );
  };

  return (
    <div>
      {options.map(opt => (
        <label key={opt}>
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
