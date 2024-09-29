import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo1">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer4-logo2"
              />
            </div>
            <div className="footer4-links">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="footer4-text20 thq-body-small">Home</span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="footer4-text19 thq-body-small">
                      Services
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="footer4-text14 thq-body-small">
                      About Us
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className="footer4-text16 thq-body-small">
                      Contact Us
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link5 ?? (
                  <Fragment>
                    <span className="footer4-text21 thq-body-small">FAQ</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">© 2024 TeleportHQ</span>
              </div>
              <div className="footer4-footer-links">
                <span>
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer4-text15 thq-body-small">
                        Privacy Policy
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer4-text18 thq-body-small">
                        Terms and Conditions
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer4-text17 thq-body-small">
                        Cookies Policy
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo1 {
            gap: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4-logo2 {
            height: 2rem;
          }
          .footer4-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text14 {
            display: inline-block;
          }
          .footer4-text15 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .footer4-text16 {
            display: inline-block;
          }
          .footer4-text17 {
            display: inline-block;
          }
          .footer4-text18 {
            display: inline-block;
          }
          .footer4-text19 {
            display: inline-block;
          }
          .footer4-text20 {
            display: inline-block;
          }
          .footer4-text21 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  link3: undefined,
  privacyLink: undefined,
  link4: undefined,
  cookiesLink: undefined,
  termsLink: undefined,
  link2: undefined,
  logoAlt: 'QA Company Logo',
  link1: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link5: undefined,
}

Footer4.propTypes = {
  link3: PropTypes.element,
  privacyLink: PropTypes.element,
  link4: PropTypes.element,
  cookiesLink: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  logoAlt: PropTypes.string,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  link5: PropTypes.element,
}

export default Footer4
