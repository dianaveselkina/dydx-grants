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
        <h3>Grant application process</h3>
        <Accordion>
          <AccordionItem
            header={
              <div>
                <p>How do I apply?</p>
              </div>
            }
          >
            <div>
              <p>
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
                <p>Can I apply as a U.S. based person/company?</p>
              </div>
            }
          >
            <div>
              <p>
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
                <p>How will I be compensated?</p>
              </div>
            }
          >
            <div>
              <p>
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
                <p>What type of project will qualify for a Grant?</p>
              </div>
            }
          >
            <div>
              <p>
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
                <p>
                  What is the application timeline? When can I expect to hear
                  back?
                </p>
              </div>
            }
          >
            <div>
              <p>
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
                <p>How can I increase my chances of getting funded?</p>
              </div>
            }
          >
            <div>
              <p>
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
                <p>How often do you approve new Rounds of funding?</p>
              </div>
            }
          >
            <div>
              <p>
                Fill out this application form. The application will only be
                shared with the Grants lead and members of the committee. The
                Lead will contact you directly if the application is
                successfully considered for a Grant.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};
