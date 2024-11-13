import React from "react";
import { useSearchParams } from "react-router-dom";

import PriceFilter from "./PriceFilter";
import { useDebounce } from "@/hooks/usedebounced";

function FilterDropDown({ filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";
  const [inputValue, setInputValue] = React.useState(value);
  const debouncedValue = useDebounce(inputValue, 300); 

  React.useEffect(() => {
    if (debouncedValue !== value) {
      searchParams.set(filterField, debouncedValue);
      setSearchParams(searchParams);
    }
  }, [debouncedValue, filterField, searchParams, setSearchParams, value]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return <PriceFilter value={inputValue} onChange={handleChange} />;
}

export default FilterDropDown;
