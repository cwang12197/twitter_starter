import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      <TweetBox
        setTweets={props.setTweets}
        tweets={props.tweets} //array of tweets being received
        userProfile={props.userProfile}
        setTweetText={props.setTweetText}
        tweetText={props.tweetText}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {props.tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
