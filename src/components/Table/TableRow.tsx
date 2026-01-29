import { Character } from "../../types/character";

interface Props {
  character: Character;
  style: React.CSSProperties;
  selected: boolean;
  onToggle: () => void;
}

export function TableRow({ character, style, selected, onToggle }: Props) {
  return (
    <tr style={style}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
          aria-label={`select-${character.name}`}
        />
      </td>
      <td>{character.name}</td>
      <td>{character.location}</td>
      <td>{character.health}</td>
      <td>{character.power}</td>
    </tr>
  );
}
