import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'

import "react-accessible-accordion/dist/fancy-example.css"
// import {MdOutlineArrowDropDowm} from "react-icons/md";
import './Value.css'
import data from "../../utils/accordion"

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="imageContainer">
                    <img src="./value.png" alt="value" />
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value we Give to You</span>
                <span className='secondaryText'>We are always ready to help by providing the best services for you.
                    <br/>
                    We belive a good place to live can make your life better.
                </span>

                <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item,i)=>{
                            const [className, setClassName]= useState(null);
                            return (
                                <AccordionItem className={`accordItm ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordBtn'>
                                            <AccordionItemState>
                                                {({expanded})=> expanded ? setClassName("expanded"): setClassName("collapsed")}

                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className='flexCenter icon'>
                                                {/* <MdOutlineArrowDropDowm size={20}/> */}
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value