import React from 'react';
import '../countryDetails/countryDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
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
          <div className="country-details__country-flag"></div>
          <div className="country-details__country-info">
            <h1 className="country-details__country-name">Country Name</h1>
            <div className="country-details__country-description">
              <div className="country-details__country-description country-details__country-description--left">
                <span className="country-details__country-detail">
                  Native Name:
                </span>
                <span className="country-details__country-detail">
                  Population:
                </span>
                <span className="country-details__country-detail">Region:</span>
                <span className="country-details__country-detail">
                  Sub Region:
                </span>
                <span className="country-details__country-detail">
                  Capital:
                </span>
              </div>
              <div className="country-details__country-description country-details__country-description--right">
                <span className="country-details__country-detail">
                  Top Level Domain:
                </span>
                <span className="country-details__country-detail">
                  Currencies:
                </span>
                <span className="country-details__country-detail">
                  Languages:
                </span>
              </div>
            </div>
            <div className="country-details__border-countries-wrapper">
              <span className="country-details__country-detail country-details__country-detail--border">
                Border Countries:{' '}
              </span>
              <Link className="country-details__border-country-link" to="/">
                BCountry
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CountryDetails;
