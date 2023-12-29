import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from '../../utils/accordion';
import './Value.css'
const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.jpg' alt='value' width='534px'/>
          </div>
        </div>

        <div className='flexColStart v-right'>
          <span className='orangeText'>Principles We Cherish</span>
          <span className='primaryText'>The esteem we offer to you</span>
          <span className='secondaryText'>
          We dedicated to Serve You with Unmatched Esteem.
          <br />
          Serving You with Passion and Precision.
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem className='accordionItem' key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>

                      
                      <div className='flexCenter icon'>{item.icon}</div>
                      <span className='primaryText'>
                        {item.heading}
                      </span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      <hr/>
      </div>
    </section>
  );
}

export default Value;
