import Weather from "./Weather";

const ShowCountryData = ({ name, area, capital, languages, cca2 }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img
        src={`https://flagcdn.com/w320/${cca2.toLowerCase()}.png`}
        alt={`Flag of ${name}`}
      />
      <Weather capital={capital} />
    </>
  );
};

export default ShowCountryData;
