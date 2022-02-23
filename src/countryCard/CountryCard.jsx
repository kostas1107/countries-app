import React from 'react';
import '../countryCard/countryCard.scss';
import { Link } from 'react-router-dom';

const CountryCard = props => {
  return (
    <Link
      className="card-link"
      to={`/country-${props.countryShortName.toLowerCase()}`}
    >
      <article className="card">
        <img
          className="card__country-flag"
          alt="flag"
          src={props.countryFlag}
        />
        <div className="card__country-details">
          <h3 className="card__country-name">{props.countryName}</h3>
          <div className="card__country-description">
            <span className="card__country-info">
              Population:{' '}
              <span
                className="card__country-data
            "
              >
                {props.countryPopulation.toLocaleString('en')}
              </span>
            </span>
            <span className="card__country-info">
              Region:{' '}
              <span
                className="card__country-data
            "
              >
                {props.countryRegion}
              </span>
            </span>
            <span className="card__country-info">
              Capital:{' '}
              <span
                className="card__country-data
            "
              >
                {props.countryCapital}
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
