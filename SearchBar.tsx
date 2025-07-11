export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search docs..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      className="search-bar"
    />
  );
}
