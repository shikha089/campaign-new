import React, { Component } from 'react';
import './App.css';
import CampaignDetails from "./components/campaigndetails"; //Imports Campaign table from campaigndetails.js


class App extends Component {

  // Initial State 
  state = {
    data: [
      {
        "status": [
          "Upcoming Campaigns"
        ], 
        "campaign": "Campaign name 1", 
        "img": "https://i.imgur.com/G0hw1f4.jpg", 
        "country": "US", 
        "id2": "a", 
        "id1": 1, 
        "date": "4-12-2018"
      }, 
      {
        "status": [
          "Upcoming Campaigns"
        ], 
        "campaign": "Campaign name 2", 
        "img": "https://i.imgur.com/sNzebY2.png", 
        "country": "JP", 
        "id2": "b", 
        "id1": 2, 
        "date": "1-12-2018"
      }, 
      {
        "status": [
          "Upcoming Campaigns"
        ], 
        "campaign": "Campaign name 3", 
        "img": "https://i.imgur.com/ghzK5Ro.png", 
        "country": "CA,FR", 
        "id2": "c", 
        "id1": 3, 
        "date": "4-4-2019"
      }, 
      {
        "status": [
          "Upcoming Campaigns"
        ], 
        "campaign": "Campaign name 4", 
        "img": "https://i.imgur.com/CVJPN5r.jpg", 
        "country": "FR", 
        "id2": "d", 
        "id1": 4, 
        "date": "4-4-1959"
      }, 
      {
        "status": [
          "Upcoming Campaigns"
        ], 
        "campaign": "Campaign name 5", 
        "img": "https://i.imgur.com/aU21mVo.png", 
        "country": "CA,FR,JP", 
        "id2": "e", 
        "id1": 5, 
        "date": "10-03-2019"
      }, 
      {
        "status": [
          "Past Campaigns"
        ], 
        "campaign": "Campaign name 6", 
        "img": "https://i.imgur.com/G0hw1f4.jpg", 
        "country": "MY", 
        "id2": "f", 
        "id1": 6, 
        "date": "1-01-2019"
      }, 
      {
        "status": [
          "Past Campaigns"
        ], 
        "campaign": "Campaign name 7", 
        "img": "https://i.imgur.com/sNzebY2.png", 
        "country": "ZA", 
        "id2": "g", 
        "id1": 7, 
        "date": "4-11-2018"
      }, 
      {
        "status": [
          "Past Campaigns"
        ], 
        "campaign": "Campaign name 8", 
        "img": "https://i.imgur.com/ghzK5Ro.png", 
        "country": "AR", 
        "id2": "h", 
        "id1": 8, 
        "date": "4-10-2018"
      }, 
      {
        "status": [
          "Live Campaigns"
        ], 
        "campaign": "Campaign name 9", 
        "img": "https://i.imgur.com/SNB8t7A.jpg ", 
        "country": "AU", 
        "id2": "i", 
        "id1": 9, 
        "date": "10-04-2019"
      }, 
      {
        "status": [
          "Live Campaigns"
        ], 
        "campaign": "Campaign name 10", 
        "img": "https://i.imgur.com/aU21mVo.png", 
        "country": "UK", 
        "id2": "j", 
        "id1": 10, 
        "date": "12-10-2018"
      }
    ]
  }

  // Fetch the data from server 
  componentDidMount() {
   this.setState({
        data:this.state.data
      })
  }

  render() {
    return (
      <div className="tab_wrapper">
        <span className="w1">Manage</span> <span className="w2"> Campaigns</span>
        <CampaignDetails details={this.state.data} />
      </div>
    );
  }
}

export default App;

