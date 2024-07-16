import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

export default function useFilter(defaultFilter?: Record<string, any>) {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = queryString.parse(location.search);

  const setFilter = useCallback(
    (newFilter: Record<string, any>, keepOldFilter = true) => {
      const updatedFilters = {
        ...((keepOldFilter && filter) || {}),
        ...newFilter,
      };
      const query = queryString.stringify(updatedFilters);
      navigate(`?${query}`);
    },
    [navigate, filter],
  );

  useEffect(() => {
    if (defaultFilter) {
      setFilter(defaultFilter, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [filter, setFilter] as const;
}
