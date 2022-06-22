import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import { useState } from "react"

export default function TweetBox(props) {

  const handleOnTweetTextChange = (event) => {
      props.setTweetText(event.target.value)
  }
  if (props.tweetText.length > 140 || props.tweetText.length == 0) {

  }
  const handleOnSubmit = () => {
    let newTweet = [ {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length
    }];''
    props.setTweets(props.tweets.concat(newTweet));
    props.setTweetText("");
    props.userProfile.numTweets++;
  }

  return (
    <div className="tweet-box">
      <TweetInput
        userProfile={props.userProfile}
        setTweets={props.setTweets}
        value={props.tweetText}
        handleOnChange = {handleOnTweetTextChange} //... notation for creating the array {...props.tweets, newTweet} 
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText= {props.tweetText} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}
        disabled = {(!props.tweetText) || (props.tweetText.length > 140)}
        />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  var classColor = ""
  if (props.tweetText.length > 140) {
    classColor = "red"
  }
  var remaining = 140 - props.tweetText.length
  if (props.tweetText.length == 0) {
    remaining = ""
  }
  return <span className={classColor}>{remaining}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.disabled}>Tweet</button>
    </div>
  )
}