import React from 'react';

function Contact2() {
    return <>
        <section className='contact_2'>
            <div className="contact2_portions">
                <div className="three_portion">
                    <div className="contact2_firstPortion">
                        <div className="contact2_firstPortion_left">

                        <i className='fa fa-phone'></i>
                        </div>
                        <div className="contact2_firstPortion_right">
                            <h4>Phone Number</h4>
                            <p>+92 345 345 345</p>
                        </div>
                    </div>
                
              
                    <div className="contact2_secondPortion">
                        <div className="contact2_secondPortion_left">

                        <i className='fa fa-envelope'></i>
                        </div>
                        <div className="contact2_secondPortion_right">
                            <h4>Email Address</h4>
                            <p>haris@heapware.com</p>
                        </div>
                    </div>
            
                    <div className="contact2_thirdPortion">
                        <div className="contact2_thirdPortion_left">

                        <i className='fa fa-map-marker'></i>
                        </div>
                        <div className="contact2_thirdPortion_right">
                            <h4>Location</h4>
                            <p>Ghazi Road, Block F <br /> Punjab Society Lahore </p>
                        </div>
                    </div>
                </div>
                <div className="contact2_form">
                    <div className="form">
                        <form action="">
                            <h2>Send Message</h2>
                            <input type="text" placeholder='First Name'/>
                            <input type="text" placeholder='Last Name'/>
                            <input type="text" placeholder='Email Address'/>
                            <input type="text" placeholder='Phone Number'/>
                            <textarea name="" id="" cols="47" rows="10" placeholder='Write your message'></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    </>;
}

export default Contact2;
