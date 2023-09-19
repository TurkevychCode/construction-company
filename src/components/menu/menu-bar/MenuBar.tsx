export default function MenuBar() {
    return (
        <div className='menuBar'>
            <div className='menuBar-block'>
                <div className='menuBar-block-items'>
                    <a href='' className='menuBar-block-items-menuItem'>Home</a>
                    <a href='' className='menuBar-block-items-menuItem'>About</a>
                    <a href='' className='menuBar-block-items-menuItem'>Pages</a>
                    <a href='' className='menuBar-block-items-menuItem'>Project</a>
                    <a href='' className='menuBar-block-items-menuItem'>Contact</a>
                </div>
                <div className='menuBar-block-networks'>
                    <div className='menuBar-block-networks-icons'>
                        <a className='menuBar-block-networks-icons-instagram' href=''/>
                        <a className='menuBar-block-networks-icons-facebook' href=''/>
                        <a className='menuBar-block-networks-icons-twitter' href=''/>
                        <a className='menuBar-block-networks-icons-linkedin' href=''/>
                    </div>
                    <button className='menuBar-block-networks-requestQuote'>Request Quote</button>
                </div>
            </div>
        </div>
    );
}