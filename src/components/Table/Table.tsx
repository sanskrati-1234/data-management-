import { FixedSizeList as List } from "react-window";
import { Character, Health } from "../../types/character";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface Props {
  data: Character[];
  selected: Set<string>;
  onToggle: (id: string) => void;
  sortOrder: "asc" | "desc";
  onSort: () => void;
}

export function Table({
  data,
  selected,
  onToggle,
  sortOrder,
  onSort
}: Props) {
  return (
    <table width="100%">
      <TableHeader onSort={onSort} sortOrder={sortOrder} />
      <tbody>
        <List
          height={400}
          itemCount={data.length}
          itemSize={40}
          width="100%"
        >
          {({ index, style }) => {
            const c = data[index];
            return (
              <TableRow
                style={style}
                character={c}
                selected={selected.has(c.id)}
                onToggle={() => onToggle(c.id)}
              />
            );
          }}
        </List>
      </tbody>
    </table>
  );
}
