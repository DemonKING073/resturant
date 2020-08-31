import React from 'react';

const Contact=()=>{
    return(
        <section className="section contact">
            <div className="section-heading color">
                Contact Us
            </div>
            <div className="box">
                <form id="contact">
                    <h2 className="form-heading">Contact us today, and get reply within 24hrs!
                    </h2>
                    <fieldset>
                        <input placeholder="Your Name" required type="text"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Number" required type="tel"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Email" required type="email"/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Your Message"/>
                        <button className="btn" type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default Contact;