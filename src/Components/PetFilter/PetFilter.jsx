import React, { useState } from 'react';

const PetFilter = ({ filters, onFilterChange, onApplyFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onFilterChange(localFilters);
    onApplyFilters();
  };

  const handleClear = () => {
    const clearedFilters = {
      type: '',
      size: '',
      gender: '',
      status: 'Available',
      search: ''
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
    onApplyFilters();
  };

  return (
    <div className="bg-base-100 rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="label">
            <span className="label-text font-semibold">Search Pets</span>
          </label>
          <input
            type="text"
            name="search"
            value={localFilters.search}
            onChange={handleChange}
            placeholder="Search by name, breed..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Type */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Type</span>
          </label>
          <select
            name="type"
            value={localFilters.type}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">All Types</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Size</span>
          </label>
          <select
            name="size"
            value={localFilters.size}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Gender</span>
          </label>
          <select
            name="gender"
            value={localFilters.gender}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Any Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
        <button 
          onClick={handleClear}
          className="btn btn-outline btn-sm"
        >
          Clear All
        </button>
        <button 
          onClick={handleApply}
          className="btn btn-primary btn-sm"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default PetFilter;