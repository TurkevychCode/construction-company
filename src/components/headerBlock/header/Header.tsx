export default function Header (){
    return (
        <div className='header'>
            <div className='header-centralBlock'>
                <div className='header-centralBlock-companyLogo'>
                    <div className='header-centralBlock-companyLogo-logo'>
                    </div>
                </div>
                <div className='header-centralBlock-addressBar'>
                    <div className='header-centralBlock-addressBar-contain'>
                        <div className='header-centralBlock-addressBar-contain-time'>
                        </div>
                        <p className='header-centralBlock-addressBar-contain-text'>
                            Mon - Sat 9.00 - 18.00
                            Sunday Closed
                        </p>
                    </div>
                    <div className='header-centralBlock-addressBar-contain'>
                        <div className='header-centralBlock-addressBar-contain-email'>
                        </div>
                        <p className='header-centralBlock-addressBar-contain-text'>
                            Email
                            contact@logistics.com
                        </p>
                    </div>
                    <div className='header-centralBlock-addressBar-contain'>
                        <div className='header-centralBlock-addressBar-contain-callUs'>
                        </div>
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