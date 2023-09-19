import HeaderBlock from "../headerBlock/HeaderBlock";
import Menu from "../menu/Menu";
import Services from "../services/services";

export default function HomePage (){
    return (
        <div>
            <HeaderBlock/>
            <Menu/>
            <Services/>
        </div>
        );
}