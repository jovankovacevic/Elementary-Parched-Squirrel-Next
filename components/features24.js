import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features24-container2 thq-section-max-width">
          <div className="features24-image-container">
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features24-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features24-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features24-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features24-tab-horizontal1"
            >
              <div className="features24-divider-container1">
                {activeTab === 0 && (
                  <div className="features24-container3"></div>
                )}
              </div>
              <div className="features24-content1">
                <h2>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h2 className="features24-text6 thq-heading-2">
                        Functional Testing
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features24-text5 thq-body-small">
                        Thorough testing of software functions to ensure they
                        meet specifications.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features24-tab-horizontal2"
            >
              <div className="features24-divider-container2">
                {activeTab === 1 && (
                  <div className="features24-container4"></div>
                )}
              </div>
              <div className="features24-content2">
                <h2>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h2 className="features24-text3 thq-heading-2">
                        Automation Testing
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features24-text2 thq-body-small">
                        Automating repetitive testing tasks to increase
                        efficiency and accuracy.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features24-tab-horizontal3"
            >
              <div className="features24-divider-container3">
                {activeTab === 2 && (
                  <div className="features24-container5"></div>
                )}
              </div>
              <div className="features24-content3">
                <h2>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h2 className="features24-text1 thq-heading-2">
                        Performance Testing
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features24-text4 thq-body-small">
                        Evaluating the speed, responsiveness, and stability of
                        software under various conditions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features24-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features24-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features24-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal3 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-text1 {
            display: inline-block;
          }
          .features24-text2 {
            display: inline-block;
          }
          .features24-text3 {
            display: inline-block;
          }
          .features24-text4 {
            display: inline-block;
          }
          .features24-text5 {
            display: inline-block;
          }
          .features24-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features24-container2 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features24.defaultProps = {
  feature3Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1575467322691-1e971b0a6d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1Nzg5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1583912268183-a34d41fe464a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1Nzg5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature3Description: undefined,
  feature2ImgAlt: 'Automation Testing Image',
  feature3ImgAlt: 'Performance Testing Image',
  feature1Description: undefined,
  feature1Title: undefined,
}

Features24.propTypes = {
  feature3Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features24
