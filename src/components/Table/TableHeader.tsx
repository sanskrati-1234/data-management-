interface Props {
  onSort: () => void;
  sortOrder: "asc" | "desc";
}

export function TableHeader({ onSort, sortOrder }: Props) {
  return (
    <thead>
      <tr>
        <th>Select</th>
        <th>Name</th>
        <th>Location</th>
        <th>Health</th>
        <th onClick={onSort} style={{ cursor: "pointer" }}>
          Power {sortOrder === "asc" ? "⬆️" : "⬇️"}
        </th>
      </tr>
    </thead>
  );
}
