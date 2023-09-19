import MenuBar from "./menu-bar/MenuBar";
import MenuText from "./menu-text/MenuText";

export default function Menu (){
    return (
        <div className='menu'>
            <MenuBar/>
            <MenuText/>
        </div>
        );
}