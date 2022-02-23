import React, { useState, useEffect } from 'react';
import '../countryDetails/countryDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import getCountries from '../api/getCountries';

const CountryDetails = () => {
  const params = useParams();
  const countryShortName = params.name;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  const country = countries.find(
    country => country.cca3.toLowerCase() === countryShortName
  );

  const countryFlag = country?.flags?.svg;
  const countryName = country?.name?.common;
  const countryNativeName =
    country?.name?.nativeName[Object.keys(country?.name?.nativeName)[0]].common;
  const countryPopulation = country?.population.toLocaleString('en');
  const countryRegion = country?.region;
  const countrySubRegion = country?.subregion;
  const countryCapital = country?.capital;
  const countryTLD = country?.tld[0];
  const countryCurrencies = country?.currencies
    ? Object.values(country?.currencies).map(
        (currency, index) => (index ? ', ' : '') + currency.name
      )
    : '';
  const countryLanguages = country?.languages
    ? Object.values(country?.languages).map(
        (language, index) => (index ? ', ' : '') + language
      )
    : '';
  const countryBorderCountries = country?.borders;

  console.log(country);
  console.log(countryCurrencies);
  return (
    <div className="country-details">
      <section className="country-details__container">
        <Link className="country-details__back-button" to="/">
          <FontAwesomeIcon
            className="country-details__arrow-icon"
            icon={faArrowLeft}
          />
          Back
        </Link>
        <article className="country-details__country-wrapper">
          <div className="country-details__country-flag">
            <img
              className="country-details__country-flag-img"
              src={countryFlag}
              alt="country flag"
            />
          </div>
          <div className="country-details__country-info">
            <h1 className="country-details__country-name">{countryName}</h1>
            <div className="country-details__country-description">
              <div className="country-details__country-description country-details__country-description--left">
                <span className="country-details__country-detail">
                  Native Name:{' '}
                  <span className="country-details__country-detail-info">
                    {countryNativeName}
                  </span>
                </span>
                <span className="country-details__country-detail">
                  Population:{' '}
                  <span className="country-details__country-detail-info">
                    {countryPopulation}
                  </span>
                </span>
                <span className="country-details__country-detail">
                  Region:{' '}
                  <span className="country-details__country-detail-info">
                    {countryRegion}
                  </span>
                </span>
                <span className="country-details__country-detail">
                  Sub Region:{' '}
                  <span className="country-details__country-detail-info">
                    {countrySubRegion}
                  </span>
                </span>
                <span className="country-details__country-detail">
                  Capital:{' '}
                  <span className="country-details__country-detail-info">
                    {countryCapital}
                  </span>
                </span>
              </div>
              <div className="country-details__country-description country-details__country-description--right">
                <span className="country-details__country-detail">
                  Top Level Domain:{' '}
                  <span className="country-details__country-detail-info">
                    {countryTLD}
                  </span>
                </span>
                <span className="country-details__country-detail">
                  Currencies:{' '}
                  <span className="country-details__country-detail-info">
                    {countryCurrencies}
                  </span>
                </span>
                <span className="country-details__country-detail">
                  Languages:{' '}
                  <span className="country-details__country-detail-info">
                    {countryLanguages}
                  </span>
                </span>
              </div>
            </div>
            <div className="country-details__border-countries-wrapper">
              <span className="country-details__country-detail country-details__country-detail--border">
                Border Countries:{' '}
              </span>
              {countryBorderCountries
                ? countryBorderCountries.map(borderCountry => (
                    <Link
                      className="country-details__border-country-link"
                      to={`/country-${borderCountry.toLowerCase()}`}
                      key={borderCountry.toLowerCase()}
                    >
                      {borderCountry}
                    </Link>
                  ))
                : ''}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CountryDetails;
