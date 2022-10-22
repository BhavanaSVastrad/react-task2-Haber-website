
import NavBar from "./Components/nav";
import {Route,Routes} from 'react-router-dom';

import C from "./Components/carousel";
import Cards from "./Components/cards";
import IconsSlider from "./Components/iconsslider";
import ThreeCards from "./Components/axios";
import TwoColumns from "./Components/twocolumns";
import Form from "./Components/form";
import CardsIcon from "./Components/CardsIcon";
import Location from "./Components/location";
const App = () => {
return (
	<div className="App">
     <NavBar/>
     <C/>
     <Cards/>
     <ThreeCards/>
<TwoColumns/>
<IconsSlider/>
<Form/>
<CardsIcon/>

<Location/>
</div>
)
}

export default App;
