import React from 'react'

import Loading from './body/loading.js'
import Videos from './body/videos.js'

export default function Body (props) {

    if (props.current == "loading") {
        return (
            <div id = "body">
                <Loading />
            </div>
        )
    }

    else if (props.current == "home") {
        return (
            <div id = "body">
                <Videos videos = {props.videos}/>
            </div>
        )
    }

    else {
        return (
            <div id = "body">
                <h1> OTHERS!!! </h1>
            </div>
        )
    }

}