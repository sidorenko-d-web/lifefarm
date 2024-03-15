import { Route, Routes } from "react-router-dom"
import "./App.css";
import Index from "./components/index.jsx";
import RegForm from "./components/auth-components/AuthPage.jsx";
import Item from './components/item-page/item.jsx'
import Cart from './components/cart/cart.jsx'
import History from './components/history/history.jsx'
import EditableItem from "./components/item-page/editableItem.jsx";
import AddItem from "./components/item-page/addItem.jsx";
import ItemNotFound from "./components/item-page/itemNotFound.jsx";

function App() {

    return (

       <Routes>
            <Route path="/" element={ <Index />}/>
            <Route path="/reg" element={ <RegForm />}/>
            <Route path="/item" element={ <Item />}/>
            <Route path="/edititem" element={ <EditableItem />}/>
            <Route path="/additem" element={ <AddItem />}/>
            <Route path="/404" element={ <ItemNotFound />}/>
            <Route path="/cart" element={ <Cart />}/>
            <Route path="/history" element={ <History />}/>
       </Routes>
    )
    
}

export default App;
