import React, { PureComponent } from 'react';
import ContactBackground from '../../backgroundElements/contact_background.png'
class Contact extends PureComponent {

    render() {

        return (
            <div className="contact container p-0" id="contact">
                <div className='row'>
                    <div className="
                    col-8 col-xl-3 col-lg-3 col-md-3
                    order-xl-2 order-lg-2 order-md-2
                    offset-2 offset-xl-1">
                        <h1>KONTAKT</h1>
                        <h3>MALGORZATA MANKOWSKA</h3>
                        <p>m.mankowska@sansara-event.pl</p>
                        <p>+48 721 160 869</p>
                        <h3>KATARZYNA HACIA</h3>
                        <p>k.hacia@sansara-event.pl</p>
                        <p>+48 721 140 905</p>
                    </div>
                    <div className="
                    col-8 col-xl-4 col-lg-4 col-md-4
                    order-xl-1 order-lg-1 order-md-1
                    offset-2 offset-xl-2 offset-lg-2 offset-md-2">
                        <form>
                            <header>
                                MASZ PYTANIA?
                            </header>
                            <input placeholder="imie i nazwisko" type="text"/>
                            <input placeholder="e-mail" type="email"/>
                            <input placeholder="numer telefonu" type="text"/>
                            <textarea rows="3" placeholder="tresc wiadomosci" type="text"/>
                            <button>WYSLIJ</button>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <img src={ContactBackground}/>
                </div>
            </div>
        )
    }
}


export default Contact;
