import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Route, Routes} from "react-router-dom"
import {About, ContactUs, Header, Home, Login, Profile, SignUp} from "./components"

function App() {

    let testUser = {
        username: "RedemptiaBlue",
        email: "example@email.com"
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/profile/*" element={<Profile user={testUser}/>}/>
            </Routes>
        </div>
    )
}

export default App
