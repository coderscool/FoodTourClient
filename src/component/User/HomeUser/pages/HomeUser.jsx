import HeaderHome from "../HeaderHome"
import Reason from "../Reason"
import StoreAdvertis from "../StoreAdvertis"
import Trending from "../Trending"
import { useState } from "react"

const HomeUser = () => {
    return(
        <div>
            <div className="">
                <HeaderHome/>
                <Trending/>
                <StoreAdvertis/>
                <Reason/>
            </div>
        </div>
    )
}
export default HomeUser