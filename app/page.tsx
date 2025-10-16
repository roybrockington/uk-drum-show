"use client"

import DealGrid from "./Components/DealGrid"
import Nav from "./Components/Nav"
import audixDeals from './Assets/audix.json'
import zoomDeals from './Assets/zoom.json'
import { useState } from "react"

const Home = () => {

    const [tab, setTab] = useState(true)
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Nav tab={tab} setTab={setTab} />
            <DealGrid deals={tab ? audixDeals : zoomDeals} />
        </main>
    )
}

export default Home
