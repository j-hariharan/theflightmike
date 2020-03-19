import React from 'react'

import Header from './header.js'
import Nav from './nav.js'
import Body from './body.js'


//  Playlist Id - UUQo7Kkt6UOnPP114Xwi5Qeg
export default class Document extends React.Component {

    constructor (props) {
        super(props)

        if (props.current == "home") {

            this.state = { current: "loading" }
            
            let link = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=UUQo7Kkt6UOnPP114Xwi5Qeg&key=AIzaSyDTxjLFQrNFwLWCTvoVMtafwkp9Hr1_QBs`

            fetch(link)
            .then(res => res.json())
            .then(data => {

                //PARSE DATA

                this.next = data.nextPageToken

                this.videos = data.items.map(e => ({
                    title: e.snippet.title,
                    thumbnail: e.snippet.thumbnails.default.url,
                    time: (new Date(e.snippet.publishedAt)).getTime(),
                    description: e.snippet.description
                }))

                console.log(this.videos)

                this.setState({current: "home"})
            })
        }

        else {
            this.state = { current: props.current }
        }
    }

    render () {
        return (
            <div id="document">
                <Header current = {this.state.current}/>
                <Nav current = {this.state.current}/>
                <Body current = {this.state.current}/>
            </div>
        )
    }

}