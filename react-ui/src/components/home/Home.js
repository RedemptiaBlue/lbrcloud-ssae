import bkgdImg from '../../media/images/6th_annual.png'
import './Home.css'
import React from "react"

export default function Home() {
    return (
        <React.Fragment>
            <img src={bkgdImg} className="bkgd-img" alt="logo"/>
        </React.Fragment>
    )
}