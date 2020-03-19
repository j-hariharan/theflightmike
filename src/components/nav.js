import React from 'react'

export default function Nav (props) {
    return (
        <div id = "nav">
            <ul>
                <li id = {props.current == "home" ? "active" : ""} onClick = {() => props.onNav("home")}>HOME</li>
                <li id = {props.current == "twitch" ? "active" : ""} onClick = {() => props.onNav("twitch")}>TWITCH</li>
                <li id = {props.current == "merch" ? "active" : ""} onClick = {() => props.onNav("merch")}>MERCH</li>
                <li id = {props.current == "patreon" ? "active" : ""} onClick = {() => props.onNav("patreon")}>PATREON</li>
            </ul>
        </div>
    )
}