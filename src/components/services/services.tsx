export default function Services() {
    return (
        <div className='services'>
            <div className='services-block'>
                <div className='services-block-heading'>
                    <a href='' className='services-block-heading-subText'>What We Do</a>
                    <h2 className='services-block-heading-title'>Safe & Reliable Cargo Solutions</h2>
                </div>
                <div className='services-block-content'>
                    <div className='services-block-content-infoContent'>
                        <div className='services-block-content-infoContent-blockInfo'>
                            <img className='services-block-content-infoContent-blockInfo-icon' src={require('../services/service-img/icon-sea-transport.png')} alt="sea transport"/>
                            <div className='services-block-content-infoContent-blockInfo-textInfo'>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-title'>Sea Transport Services</p>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-description'>Following the quality of our service thus having gained trust of our many clients.</p>
                            </div>
                        </div>
                        <div className='services-block-content-infoContent-blockInfo'>
                            <img className='services-block-content-infoContent-blockInfo-icon' src={require('../services/service-img/warehousing-icon.png')} alt="warehousing"/>
                            <div className='services-block-content-infoContent-blockInfo-textInfo'>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-title'>Warehousing Services</p>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-description'>Following the quality of our service thus having gained trust of our many clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className='services-block-content-infoContent'>
                        <div className='services-block-content-infoContent-blockInfo'>
                            <img className='services-block-content-infoContent-blockInfo-icon' src={require('../services/service-img/air-fright-icon.png')} alt="air fright"/>
                            <div className='services-block-content-infoContent-blockInfo-textInfo'>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-title'>Air Fright Services</p>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-description'>Following the quality of our service thus having gained trust of our many clients.</p>
                            </div>
                        </div>
                        <div className='services-block-content-infoContent-blockInfo'>
                            <img className='services-block-content-infoContent-blockInfo-icon' src={require('../services/service-img/local-shipping-icon.png')} alt="local shipping"/>
                            <div className='services-block-content-infoContent-blockInfo-textInfo'>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-title'>Local Shipping Services</p>
                                <p className='services-block-content-infoContent-blockInfo-textInfo-description'>Following the quality of our service thus having gained trust of our many clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}