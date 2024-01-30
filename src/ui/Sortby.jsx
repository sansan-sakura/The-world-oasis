import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export const Sortby = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChane(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} type="white" onChange={handleChane} value={sortBy} />;
};
