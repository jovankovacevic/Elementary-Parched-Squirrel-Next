import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="testimonial17-text33 thq-heading-2">
                    Testimonials
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text28 thq-body-small">
                    See what our clients have to say about our tailored testing
                    solutions.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container13">
                      <strong>
                        {props.author1Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text29 thq-body-large">
                              John Doe
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text36 thq-body-small">
                              CEO, Tech Company X
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text35 thq-body-small">
                          Working with QA Company has been a game-changer for
                          us. Their attention to detail and thorough testing
                          have significantly improved the quality of our
                          software products.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container15">
                      <strong>
                        {props.author2Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text32 thq-body-large">
                              Jane Smith
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text31 thq-body-small">
                              CTO, Software Company Y
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text30 thq-body-small">
                          QA Company&apos;s automation testing services have
                          saved us time and resources while ensuring our
                          software performs flawlessly. Highly recommended!
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container17">
                      <strong>
                        {props.author3Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text37 thq-body-large">
                              Michael Johnson
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text24 thq-body-small">
                              Head of Development, App Company Z
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text26 thq-body-small">
                          The security testing provided by QA Company helped us
                          identify vulnerabilities early on, preventing
                          potential breaches. Their expertise is unmatched.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image4"
                    />
                    <div className="testimonial17-container19">
                      <strong>
                        {props.author4Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text25 thq-body-large">
                              Sarah Lee
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text34 thq-body-small">
                              Product Manager, Startup A
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text27 thq-body-small">
                          I appreciate the dedication and flexibility QA Company
                          showed in adapting their testing to our specific
                          needs. They truly care about delivering top-notch
                          quality.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text27 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text28 {
            display: inline-block;
            text-align: center;
          }
          .testimonial17-text29 {
            display: inline-block;
          }
          .testimonial17-text30 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text31 {
            display: inline-block;
          }
          .testimonial17-text32 {
            display: inline-block;
          }
          .testimonial17-text33 {
            display: inline-block;
          }
          .testimonial17-text34 {
            display: inline-block;
          }
          .testimonial17-text35 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text36 {
            display: inline-block;
          }
          .testimonial17-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author3Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1624561254177-28de5f2c36eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1Nzg5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author4Alt: 'Image of Sarah Lee, Product Manager at Startup A',
  author3Src:
    'https://images.unsplash.com/photo-1707728010812-63a4fa1d6e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1Nzg5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1517840933437-c41356892b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1Nzg5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  review4: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1502305106728-e8c0290fb1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1Nzg5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  author1Name: undefined,
  review2: undefined,
  author3Alt: 'Image of Michael Johnson, Head of Development at App Company Z',
  author2Position: undefined,
  author2Name: undefined,
  heading1: undefined,
  author4Position: undefined,
  review1: undefined,
  author1Alt: 'Image of John Doe, CEO of Tech Company X',
  author1Position: undefined,
  author2Alt: 'Image of Jane Smith, CTO of Software Company Y',
  author3Name: undefined,
}

Testimonial17.propTypes = {
  author3Position: PropTypes.element,
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  review3: PropTypes.element,
  review4: PropTypes.element,
  author4Src: PropTypes.string,
  content1: PropTypes.element,
  author1Name: PropTypes.element,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author2Name: PropTypes.element,
  heading1: PropTypes.element,
  author4Position: PropTypes.element,
  review1: PropTypes.element,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Name: PropTypes.element,
}

export default Testimonial17
