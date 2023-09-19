export default function Header() {
    return (
        <div className='header'>
            <div className='header-centralBlock'>
                <div className='header-centralBlock-companyLogo'>
                    <img className='header-centralBlock-companyLogo-logo'
                         src={require('../header-img/company-logo.png')} alt="logo"/>
                </div>
                <div className='header-centralBlock-addressBar'>
                    <div className='header-centralBlock-addressBar-contain'>
                        <img className='header-centralBlock-addressBar-contain-time'
                             src={require('../header-img/time-icon.png')} alt="time icon"/>
                        <p className='header-centralBlock-addressBar-contain-text'>
                            Mon - Sat 9.00 - 18.00
                            Sunday Closed
                        </p>
                    </div>
                    <div className='header-centralBlock-addressBar-contain'>
                        <img className='header-centralBlock-addressBar-contain-email'
                             src={require('../header-img/email-icon.png')} alt="email icon"/>
                        <p className='header-centralBlock-addressBar-contain-text'>
                            Email
                            contact@logistics.com
                        </p>
                    </div>
                    <div className='header-centralBlock-addressBar-contain'>
                        <img className='header-centralBlock-addressBar-contain-callUs'
                             src={require('../header-img/call-icon.png')} alt="callUs icon"/>
                        <p className='header-centralBlock-addressBar-contain-text'>
                            Call Us
                            <br/>
                            (00) 112 365 489
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}