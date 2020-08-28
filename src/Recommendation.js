import React from 'react'
import VideoCard from "./VideoCard.js"
import "./Recommendation.css"
import videoimage from "./videothumbnail.jpg"

function Recommendation() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>

            <div className="recommendedVideos__videos">

                <VideoCard
                    title="Become an Expert in Maxican Food in 15 minutes" 
                    channel="Pkasemer" 
                    views="4.8M views" 
                    Timestamp="3 days ago"
                    thumbnail={videoimage}
                    owner="https://avatars2.githubusercontent.com/u/41443166?s=460&u=794643de8ee050ee778fcc9fa713d68cbfcdf449&v=4"
                />
                <VideoCard
                    title="Become an Expert in Maxican Food in 15 minutes" 
                    channel="Pkasemer" 
                    views="4.8M views" 
                    Timestamp="3 days ago"
                    thumbnail="https://miro.medium.com/max/1000/1*orb0tJW2yQA8WFOimXLoZQ.jpeg"
                    owner="https://i.pinimg.com/originals/6e/47/d4/6e47d4c46d49f0a19e42e4bd7c0ff060.jpg"
                />
                <VideoCard
                    title="Become an Expert in Maxican Food in 15 minutes" 
                    channel="Pkasemer" 
                    views="4.8M views" 
                    Timestamp="3 days ago"
                    thumbnail="https://dkexpressions.co.za/wp-content/uploads/2019/01/MKBHD-Picks-The-Best.jpg"
                    owner="https://avatars2.githubusercontent.com/u/41443166?s=460&u=794643de8ee050ee778fcc9fa713d68cbfcdf449&v=4"
                />
                <VideoCard
                    title="Become an Expert in Maxican Food in 15 minutes" 
                    channel="Pkasemer" 
                    views="4.8M views" 
                    Timestamp="3 days ago"
                    thumbnail="https://i.ytimg.com/vi/6sQ85MrpOPI/maxresdefault.jpg"
                    owner="https://avatars2.githubusercontent.com/u/41443166?s=460&u=794643de8ee050ee778fcc9fa713d68cbfcdf449&v=4"
                />
                <VideoCard
                    title="Become an Expert in Maxican Food in 15 minutes" 
                    channel="Pkasemer" 
                    views="4.8M views" 
                    Timestamp="3 days ago"
                    thumbnail={videoimage}
                    owner="https://avatars2.githubusercontent.com/u/41443166?s=460&u=794643de8ee050ee778fcc9fa713d68cbfcdf449&v=4"
                />
                <VideoCard
                    title="Become an Expert in Maxican Food in 15 minutes" 
                    channel="Pkasemer" 
                    views="4.8M views" 
                    Timestamp="3 days ago"
                    thumbnail={videoimage}
                    owner="https://avatars2.githubusercontent.com/u/41443166?s=460&u=794643de8ee050ee778fcc9fa713d68cbfcdf449&v=4"
                />

            </div>

        </div>
    )
}

export default Recommendation
