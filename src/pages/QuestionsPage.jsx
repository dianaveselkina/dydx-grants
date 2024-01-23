import React from 'react';
import { Header } from '../components/Header/Header';
import { Creation } from '../components/Creation/Creation';
import { Footer } from '../components/Footer/Footer';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import './index.css';

export const QuestionsPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="application__title">Frequently asked questions</h1>
        <div className="frequently__block">
          <h3 className="application__denotation">Grant application process</h3>
          <Accordion className="questions__accordion">
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">How do I apply?</p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    Can I apply as a U.S. based person/company?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">How will I be compensated?</p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    What type of project will qualify for a Grant?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    What is the application timeline? When can I expect to hear
                    back?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    How can I increase my chances of getting funded?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title title1">
                    How often do you approve new Rounds of funding?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="frequently__block">
          <h3 className="selection__denotation">Selection criteria</h3>
          <Accordion className="questions__accordion">
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    What is the dYdX Grants Trust?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">Where are funds held?</p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    When was the program launched?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">Who are the Trustees?</p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title title1">
                    What and who is the Enforcer?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="frequently__block">
          <h3 className="selection__denotation">The Grants Trust</h3>
          <Accordion className="questions__accordion">
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    What is the dYdX Grants Trust?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">Where are funds held?</p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">
                    When was the program launched?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title">Who are the Trustees?</p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              header={
                <div>
                  <p className="questions__title title1">
                    What and who is the Enforcer?
                  </p>
                </div>
              }
            >
              <div>
                <p className="questions__text">
                  Fill out this application form. The application will only be
                  shared with the Grants lead and members of the committee. The
                  Lead will contact you directly if the application is
                  successfully considered for a Grant.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};
