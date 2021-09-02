const FilterSearch = () => {
  return (
    <div className="container py-2 mb-3">
      <div className="col-auto">
        <div className="input-group">
          <div className="input-group-text">Filter Snippets</div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Search Text"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
