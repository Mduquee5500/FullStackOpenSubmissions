import { useState } from "react";
import FindCountries from "./components/FindCountries";
import ShowCountryData from "./components/ShowCountryData";

const Input = ({ type, value, onChange }) => {
  return (
    <>
      <div>
        <label>Find countries: </label>
        <input type={type} value={value} onChange={onChange} />
      </div>
    </>
  );
};

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelecteCountry] = useState(null);

  console.log("Countries: ", countries);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setSelecteCountry(null);
  };

  const handleShow = (country) => {
    setSelecteCountry(country);
  };

  const exactlyOneCountry = countries.length === 1 ? countries[0] : null;

  return (
    <>
      <Input type="text" value={search} onChange={handleChange} />
      <FindCountries search={search} setCountries={setCountries} />

      <div>
        {countries.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}

        {countries.length > 1 &&
          countries.length <= 10 &&
          countries.map((country) => (
            <div key={country.cca2}>
              {country.name.common}{" "}
              <button onClick={() => handleShow(country)}>Show</button>
            </div>
          ))}

        {(exactlyOneCountry || selectedCountry) && (
          <ShowCountryData
            name={(selectedCountry || exactlyOneCountry).name.common}
            area={(selectedCountry || exactlyOneCountry).area}
            capital={(selectedCountry || exactlyOneCountry).capital}
            languages={(selectedCountry || exactlyOneCountry).languages}
            cca2={(selectedCountry || exactlyOneCountry).cca2}
          />
        )}
      </div>
    </>
  );
}

export default App;
