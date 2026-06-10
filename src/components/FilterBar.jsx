function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <button
        className={filter === "All" ? "active-filter" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        className={filter === "Completed" ? "active-filter" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>

      <button
        className={filter === "Pending" ? "active-filter" : ""}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterBar;
