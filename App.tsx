import { useState } from "react";
import { useCharacters } from "./hooks/useCharacters";
import { useSelection } from "./hooks/useSelection";
import { useDebounce } from "./hooks/useDebounce";
import { Table } from "./components/Table/Table";
import { Health } from "./types/character";
import { HealthFilter } from "./components/Table/HealthFilter";

export default function App() {
  const { data, setData, loading } = useCharacters();
  const { selected, toggle, clear } = useSelection();

  const [search, setSearch] = useState("");
  const [health, setHealth] = useState<Health[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const debouncedSearch = useDebounce(search);

  const filtered = data
    .filter(d =>
      `${d.name}${d.location}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    )
    .filter(d => (health.length ? health.includes(d.health) : true))
    .sort((a, b) =>
      sort === "asc" ? a.power - b.power : b.power - a.power
    );

  const markViewed = () => {
    console.log(Array.from(selected));
    setData(prev =>
      prev.map(p =>
        selected.has(p.id) ? { ...p, viewed: true } : p
      )
    );
    clear();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input
        placeholder="Search name or location"
        onChange={e => setSearch(e.target.value)}
      />

      <HealthFilter selected={health} onChange={setHealth} />

      <button onClick={markViewed}>Mark Viewed</button>

      <Table
        data={filtered}
        selected={selected}
        onToggle={toggle}
        sortOrder={sort}
        onSort={() => setSort(s => (s === "asc" ? "desc" : "asc"))}
      />
    </div>
  );
}
