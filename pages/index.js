import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Pricing14 from '../components/pricing14'
import CTA26 from '../components/cta26'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Elementary Parched Squirrel</title>
          <meta property="og:title" content="Elementary Parched Squirrel" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100 thq-link thq-body-small">
                /home
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101 thq-link thq-body-small">
                /services
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102 thq-link thq-body-small">
                /about
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103 thq-link thq-body-small">
                /contact
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104 thq-body-large">Home</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105 thq-body-large">Services</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106 thq-body-large">About Us</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107 thq-body-large">Contact</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">Secondary Action</span>
            </Fragment>
          }
          logoSrc="https://images.unsplash.com/photo-1583912268183-a34d41fe464a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          page1ImageSrc="https://images.unsplash.com/photo-1624957866304-9eb839c3fd99?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          page2ImageSrc="https://images.unsplash.com/photo-1579165466814-e646cfa4a3be?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          page3ImageSrc="https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          page4ImageSrc="https://images.unsplash.com/photo-1593491205049-7f032d28cf5c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          page1Description={
            <Fragment>
              <span className="home-text110 thq-body-small">
                Page One Description
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111 thq-body-small">
                Page Two Description
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112 thq-body-small">
                Page Three Description
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113 thq-body-small">
                Page Four Description
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text114 thq-body-small">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text115 thq-body-small">
                Secondary action
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text116 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text117 thq-heading-1">
                Medium length hero headline goes here
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image2Src="https://images.unsplash.com/photo-1573165759995-5865a394a1aa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image3Src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA1Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image4Src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image5Src="https://images.unsplash.com/photo-1573167101669-476636b96cea?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image6Src="https://images.unsplash.com/photo-1581090123826-27b62664de96?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTAzOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image7Src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA2OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image8Src="https://images.unsplash.com/photo-1573165706433-60f05c787234?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image9Src="https://images.unsplash.com/photo-1573495783078-30b34471804b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image10Src="https://images.unsplash.com/photo-1573497019584-769c02ee89f5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image11Src="https://images.unsplash.com/photo-1576086639808-ddfd21aa668c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          image12Src="https://images.unsplash.com/photo-1573167474706-deb8c54d0bc7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0MHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        ></Hero17>
        <Pricing14
          plan1={
            <Fragment>
              <span className="home-text118 thq-body-large">Basic Plan</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text119 thq-body-large">Business plan</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text120 thq-body-large">
                Enterprise plan
              </span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text121 thq-body-large">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text122 thq-body-large">Business plan</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text123 thq-body-large">
                Enterprise plan
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text124 thq-body-small">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text125 thq-body-large">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text128 thq-heading-2">Pricing plan</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text129 thq-heading-3">$499/month</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text130 thq-heading-3">$29/mo</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text131 thq-heading-3">$49/mo</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text132 thq-body-small">Sign Up Now</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text133 thq-heading-3">$200/yr</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text134 thq-body-large">$999/year</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text135 thq-body-small">Get started</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text136 thq-heading-3">$299/yr</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text137 thq-body-large">
                or $299 yearly
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text138 thq-body-small">Get started</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text139 thq-heading-3">$499/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text140 thq-body-large">
                or $499 yearly
              </span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text141 thq-body-small">Get started</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text142 thq-body-large">
                or $20 monthly
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text143 thq-body-small">Get started</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text144 thq-body-large">
                or $29 monthly
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text145 thq-body-small">Get started</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text146 thq-body-large">
                or $49 monthly
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text147 thq-body-small">
                Functional Testing
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text148 thq-body-small">
                1 Test Calendar per month 
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text149 thq-body-small">
                Up to 50 Test Cases per Test Run
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text150 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text151 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text152 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text153 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text154 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text155 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text156 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text157 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text158 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text159 thq-body-small">24/7 Support</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text160 thq-body-small">
                Monthly Reports
              </span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text161 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text162 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text163 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text164 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text165 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text166 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text167 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text168 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text169 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text170 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
        ></Pricing14>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text171">Get in Touch</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text172 thq-body-large">
                Contact us today to discuss your testing needs and how we can
                help you achieve your quality goals.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text173 thq-heading-2">
                Ready to Improve Your Software Quality?
              </span>
            </Fragment>
          }
        ></CTA26>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text174 thq-heading-2">
                Initial Consultation
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text175 thq-heading-2">
                Tailored Testing Plan
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text176 thq-heading-2">
                Execution and Reporting
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text177 thq-heading-2">
                Ongoing Support
              </span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text178 thq-body-small">
                We start by understanding your software testing needs and goals.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text179 thq-body-small">
                Based on the consultation, we create a customized testing
                strategy for your software.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text180 thq-body-small">
                Our team executes the testing plan and provides detailed reports
                on the results.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text181 thq-body-small">
                We offer continuous support to ensure your software maintains
                its quality standards.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text182 thq-body-small">
                Working with QA Company has been a game-changer for us. Their
                attention to detail and thorough testing have significantly
                improved the quality of our software products.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text183 thq-body-small">
                QA Company&apos;s automation testing services have saved us time
                and resources while ensuring our software performs flawlessly.
                Highly recommended!
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text184 thq-body-small">
                The security testing provided by QA Company helped us identify
                vulnerabilities early on, preventing potential breaches. Their
                expertise is unmatched.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text185 thq-body-small">
                I appreciate the dedication and flexibility QA Company showed in
                adapting their testing to our specific needs. They truly care
                about delivering top-notch quality.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text186 thq-body-small">
                See what our clients have to say about our tailored testing
                solutions.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text187 thq-heading-2">Testimonials</span>
            </Fragment>
          }
          author1Src="https://images.unsplash.com/photo-1573495804658-7885a640fc1c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          author2Src="https://images.unsplash.com/photo-1642098475329-941d6fca8439?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          author3Src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          author4Src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          author1Name={
            <Fragment>
              <span className="home-text188 thq-body-large">John Doe</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text189 thq-body-large">Jane Smith</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text190 thq-body-large">
                Michael Johnson
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text191 thq-body-large">Sarah Lee</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text192 thq-body-small">
                CEO, Tech Company X
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text193 thq-body-small">
                CTO, Software Company Y
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text194 thq-body-small">
                Head of Development, App Company Z
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text195 thq-body-small">
                Product Manager, Startup A
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text196 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text197 thq-heading-2">Locations</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text198 thq-heading-3">Bucharest</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text199 thq-heading-3">Cluj - Napoca</span>
            </Fragment>
          }
          location1ImageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          location2ImageSrc="https://images.unsplash.com/photo-1583912086005-ac9abca6c9db?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          location1Description={
            <Fragment>
              <span className="home-text200 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text201 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text202 thq-body-small">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text203 thq-body-small">Services</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text204 thq-body-small">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text205 thq-body-small">Contact Us</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text206 thq-body-small">FAQ</span>
            </Fragment>
          }
          logoSrc="https://images.unsplash.com/photo-1573495612077-a689b084faab?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU1OTA0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
          termsLink={
            <Fragment>
              <span className="home-text207 thq-body-small">
                Terms and Conditions
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text208 thq-body-small">
                Cookies Policy
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text209 thq-body-small">
                Privacy Policy
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text105 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text106 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text107 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
            text-align: center;
          }
          .home-text117 {
            display: inline-block;
            text-align: center;
          }
          .home-text118 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text119 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text120 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text121 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text122 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text123 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text124 {
            display: inline-block;
            text-align: center;
          }
          .home-text125 {
            display: inline-block;
            text-align: center;
          }
          .home-text128 {
            display: inline-block;
            text-align: center;
          }
          .home-text129 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text130 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text131 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
            text-align: center;
          }
          .home-text179 {
            display: inline-block;
            text-align: center;
          }
          .home-text180 {
            display: inline-block;
            text-align: center;
          }
          .home-text181 {
            display: inline-block;
            text-align: center;
          }
          .home-text182 {
            display: inline-block;
            text-align: left;
          }
          .home-text183 {
            display: inline-block;
            text-align: left;
          }
          .home-text184 {
            display: inline-block;
            text-align: left;
          }
          .home-text185 {
            display: inline-block;
            text-align: left;
          }
          .home-text186 {
            display: inline-block;
            text-align: center;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
            text-align: center;
          }
          .home-text199 {
            display: inline-block;
            text-align: center;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
