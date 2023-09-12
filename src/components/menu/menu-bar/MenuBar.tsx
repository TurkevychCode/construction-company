export default function MenuBar (){
    return (
        <div className='menuBar'>
            <div className='menuBar-items'>
                <a href='' className='menuBar-items-menuItem'>Home</a>
                <a href='' className='menuBar-items-menuItem'>About</a>
                <a href='' className='menuBar-items-menuItem'>Pages</a>
                <a href='' className='menuBar-items-menuItem'>Project</a>
                <a href='' className='menuBar-items-menuItem'>Contact</a>
            </div>
            <div className='menuBar-networks'>
                <a className='menuBar-networks-instagram' href=''/>
                <a className='menuBar-networks-facebook' href=''/>
                <a className='menuBar-networks-twitter' href=''/>
                <a className='menuBar-networks-linkedin' href=''/>
                <button className='menuBar-networks-requestQuote'>Request Quote</button>
            </div>
        </div>
        );
}