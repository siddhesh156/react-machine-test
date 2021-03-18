import React from 'react'
import './style.css'
import image from './../../images/userImage.png'
import phone from './../../images/phone.png'
import message from './../../images/message.png'
import suitcase from './../../images/suitcase.png'
import plus from './../../images/plus.png'
import linkedin from './../../images/linkedin.png'
import lock from './../../images/lock.png'


const ContactItem = props => {
    return (
       <div>

           <div className="d-f jc-sb contact_item_container">
               <div><img src={image} height="40" width="40" alt="hbd"/></div>
               <div className="d-f f-c w-f ml-20">
                <div className="contact_name_txt">{props.name}</div>
                    <div className="d-f">
                        <img height="20" width="20" src={suitcase} alt="1"/>
                        <div className="contact_position_txt">{props.position}</div>
                    </div>

                    {props.Reveal === false  ? <>
                    
                    <div className="d-f ai-c">
                    <img  height="20" width="20" src={message} alt="2"/>
                    <div  className="contact_position_txt">{props.emailId}</div>
                </div>
                <div className="d-f ai-c">
                    <img  height="20" width="20" src={phone} alt="3"/>
                    <div className="contact_position_txt">{props.phoneNumber}</div>
                </div>
                </>
                    
                    :<div className="d-f ai-c">
                    <img  height="20" width="20" src={lock} alt="3"/>
                    <div onClick={props.revalBtnClick} className="contact_position_txt reval_btn">Reveal</div>
                </div>}
                    
               </div>
               
               <div className="d-f f-c jc-sb ">
               {props.Reveal ? null:<>
               <img  height="20" width="20" src={plus} alt="3"/>
               <img  height="20" width="20" src={linkedin} alt="3"/>
               </>
               }
               </div>
           </div>
       </div>
    );
}

export default ContactItem