import {ProfileNav} from "./profilenav"
import {Home} from "./home"
import {Gifts} from "./gifts"
import {Upload} from "./upload"
import {Route, Routes} from "react-router-dom"
import {Settings} from "./settings";

export default function Profile(props) {

    return (
        <>
            <ProfileNav/>
            <Routes>
                <Route exact path="/profile" element={<Home />}/>
                <Route path="profile/gifts" element={<Gifts />}/>
                <Route path="profile/upload" element={<Upload />}/>
                <Route path="profile/account" element={<Settings />}/>
            </Routes>
        </>
    )
}