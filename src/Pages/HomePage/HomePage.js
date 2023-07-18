
//rafce - react arrow function component export
import React from 'react'
import TrendingVideoList from './TrendingVideoList/TrendingVideoList'
import RecommendedVideoList from './RecommendedVideoList/RecommendedVideoList'
import Subscription from './Subscription/Subscription'
import LatestVideo from './LatestVideo/LatestVideo'
import LifeCycleDemo from './LifeCycleDemo/LifeCycleDemo'
import MyProfile from './MyProfile/MyProfile'
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
        <Helmet>
          <title>Home </title>
        </Helmet>
        <h1>Welcome to HomePage !</h1>
        

        <div className = "row">
            <div>
                <h3>Latest Video | props | Demo</h3>
            </div>
            <div className="col-md-3">
                <LatestVideo 
                    image = "https://via.placeholder.com/280x200"
                    title = "Code_with_Asri 👩‍💻💻"
                    views = "2M views"
                    publised = "2 days ago"
                    description = "Learn the entire Java concepts and interview questions..Super exciting...😎"                 
                    />
            </div>

            <div className="col-md-3">
                <LatestVideo 
                    image = "https://via.placeholder.com/280x200"
                    title = "BhakiyaLakshmi "
                    views = "1M views"
                    publised = "10 mins ago"
                    description = "Watch the promo of BhakiyaLakshmi 30-06-2023 #VijayTv|Television 🤣"                 
                    />
            </div>

            <div className="col-md-3">
                <LatestVideo 
                    image = "https://via.placeholder.com/280x200"
                    title = "Adi Penne❤️ Tamil song"
                    views = "10M views"
                    publised = "1 day ago"
                    description = "Concert by Srinisha Jayaseelan and Stephen Zechariah in Tiruchirapalli🎶🎸"                 
                    />
            </div>
        </div>

        <div className = "md-3">
            <h2>Trending Video|Class Component|States|Events</h2>
        <TrendingVideoList/>
        </div>
        <div className = "md-3">
            <h2>Recommended Video|Class Comp|States|Events|List|Key|Conditionals</h2>
        <RecommendedVideoList/>
        </div>
        <div className = "md-3">
            <h2>Subscription | Styling in React</h2>
        <Subscription/>
        </div>
        <div className = "md-3">
            <h2>My Profile| Two Way Binding in React | Demo</h2>
        <MyProfile/>
        </div>
        <div className = "md-3">
            <h2>Hooks | Life Cycle Hooks in React | Demo</h2>
        <LifeCycleDemo/>
        </div>
        
    </div>
  )
}

export default HomePage