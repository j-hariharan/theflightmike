import React from 'react'

import Header from './header.js'
import Nav from './nav.js'
import Body from './body.js'


//  Playlist Id - UUQo7Kkt6UOnPP114Xwi5Qeg
export default class Document extends React.Component {

    constructor (props) {
        super(props)


        // bindings...
        this.navigation = this.navigation.bind(this)

        if (this.props.current == "home" || this.props.current =="bball" || this.props.current == "football" || this.props.current == "soccer") {

            this.state = { current : "loading" }

            getVideos()
            .then(res => {
                this.next = res.next
                this.videos = res.data
                this.setState({ current: this.props.current })
            })
        }
        else this.state = { current: this.props.current }
    }

    render () {
        return (
            <div id="document">
                <Header current = {this.state.current}/>
                <Nav current = {this.state.current} onNav = {this.navigation}/>
                <Body current = {this.state.current} videos = {this.videos}/>
            </div>
        )
    }

    navigation (section) {
        this.setState({ current: section })
    }

}



async function getVideos () {

    let channels = ['UUQo7Kkt6UOnPP114Xwi5Qeg', 'UU1gkLFIojYo1TGhZM84rZeQ', 'UUeX1ggp3t62DjtPHNvCReeQ']
    let links = channels.map(id => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${id}&key=AIzaSyDBrw3iTtCGBSWcdNadg5miO-KMUb-AkoA`)
    let res = await Promise.all(links.map(l => fetch(l)))
    let [data1, data2, data3] = await Promise.all(res.map(r => r.json()))
    
    let next = [data1.nextPageToken, data2.nextPageToken, data3.nextPageToken]
    let data = [ ...format(data1), ...format(data2), ...format(data3)]

    data.sort((a,b) => b.time - a.time)

    return {data, next}

    function format (v) {
        return v.items.map(video => ({
            title: video.snippet.title,
            time: (new Date(video.snippet.publishedAt)).getTime(),
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.medium.url,
            id: video.contentDetails.videoId
        }))
    }

}