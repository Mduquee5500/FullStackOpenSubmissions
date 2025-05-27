import axios from "axios";
import { useEffect } from "react";

const FindCountries = ({ search, setCountries }) => {
  useEffect(() => {
    if (search) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => {
          const filteredData = response.data.filter((country) =>
            country.name.common.includes(search)
          );
          setCountries(filteredData);
        });
    } else {
      setCountries([]);
    }
  }, [search, setCountries]);

  return null;
};

export default FindCountries;
