import React from 'react'

export default function Videos (props) {
    let tiles = props.videos.map(v => <VideoTile video = {v} key = {v.id}/>)

    return (
        <div id = "videos">
            {tiles}
        </div>
    )
}


function VideoTile (props) {
    return (
        <span className = "videoTile">
            <img src = {props.video.thumbnail} />
            <h2>{props.video.title.slice(0, 60) + '...'}</h2>
            <p>{props.video.time}</p>
        </span>
    )
}