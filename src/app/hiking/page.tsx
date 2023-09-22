import * as React from 'react';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export default function HikingInfo() {
  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "25px" }}>🏞 Hiking Information</h1 >

      <h2>❤️ Hike Safe</h2>
      <ol style={{
        listStyle: "none",
        paddingLeft: "52px",
      }}>
        <li style={{ paddingBottom: "10px", lineHeight: "22px", textIndent: "-2em" }}>❄️&nbsp;&nbsp;&nbsp;Stay up-to-date on lastest forecast and dress appropriately for harsh summit conditions        <Link href="https://sectionhiker.com/sectionhiker-gear-guide/recommended-winter-hiking-gear-list/" target="_blank" rel="noopener noreferrer">(Winter Gear List)</Link></li>
        <li style={{ paddingBottom: "10px", lineHeight: "22px", textIndent: "-2em" }}>&nbsp;🚶🏿&nbsp;&nbsp;&nbsp;Download trails ahead of time and ensure they work offline (w/o cell signal). Have a backup navigation system (e.g. map/compass, <Link href="https://www.garmin.com/en-US/p/621802" target="_blank" rel="noopener noreferrer">GPS watch</Link>)</li>
        <li style={{ paddingBottom: "10px", lineHeight: "22px", textIndent: "-2em" }}>✈️&nbsp;&nbsp;Turn on airplane mode to conserve phone battery</li>
        <li style={{ paddingBottom: "10px", lineHeight: "22px", textIndent: "-2em" }}>👪&nbsp;&nbsp;Tell family/friends which trail you are doing</li>
        <li style={{ paddingBottom: "10px", lineHeight: "22px", textIndent: "-2em" }}>🎸&nbsp;&nbsp;Solo hiking is an adventure you should try after you are experienced, but pairing up is always safer</li>
        <li style={{ paddingBottom: "10px", lineHeight: "22px", textIndent: "-2em" }}>⛰️&nbsp;&nbsp;When in doubt, turn around; the mountain will be there for another day</li>
      </ol>


      <h2>🥾 Trails To Try</h2>
      <ol>
        <li><h3 style={{ fontSize: "18px", marginBottom: "14px" }}><Link href="https://www.hikingproject.com/directory/8011666/white-mountain-region" target="_blank" rel="noopener noreferrer">Hiking Project</Link></h3></li>
        <li><h3 style={{ fontSize: "18px", marginTop: "14px", marginBottom: "14px" }}><Link href="https://newenglandwaterfalls.com/terrifying25.php" target="_blank" rel="noopener noreferrer">Terrifying 25</Link></h3></li>
        <li><h3 style={{ fontSize: "18px", marginTop: "14px" }}><Link href="https://www.alltrails.com/parks/us/new-hampshire/white-mountain-national-forest--3" target="_blank" rel="noopener noreferrer">AllTrails</Link><Link href="#warning"> *</Link></h3></li>
      </ol>


      <h2 style={{ marginTop: "45px" }}>📱 GPS Trail Apps</h2>
      <ol>
        <li>
          <h3 id="Hiking Project"><Link href="https://www.hikingproject.com/" target="_blank" rel="noopener noreferrer">Hiking Project</Link></h3>
          <h4 style={{ marginBottom: "0px" }}>Pros: </h4>
          <ul>
            <li>Entire trail systems by U.S. State can be predownload for no cell service</li>
            <li>Tracks your hiked route (useful for not getting lost)</li>
            <li>No cost</li>
          </ul>
          <h4 style={{ marginBottom: "0px" }}>Cons: </h4>
          <ul>
            <li>Limited trails</li>
          </ul>
        </li>
        <li>
          <h3 id="AllTrails" style={{ marginBottom: "0px" }}><Link href="https://www.alltrails.com/" target="_blank" rel="noopener noreferrer">AllTrails</Link></h3>
          <b id="warning" style={{ color: "#b9101e", fontSize: "14px" }}><p style={{ margin: "0" }}>*WARNING: YOU COULD GET LOST!</p><p style={{ margin: "0" }}>Loss of cell service w/o downloading a trail ahead of time, requiring $ AllTrails pro membership</p></b>

          <h4 style={{ marginBottom: "0px" }}>Pros: </h4>
          <ul>
            <li>Works well for local hikes with good signal</li>
            <li>Trails extensively mapped out</li>
            <li>Recent reviews to check conditions</li>
          </ul>
          <h4 style={{ marginBottom: "0px" }}>Cons: </h4>
          <ul>
            <li>Cost: Need to pay for hikes outside of cell service</li>
            <li>Inflexibilty: Need to download the specific trail you plan to hike ahead of time</li>
          </ul>
        </li>
      </ol>
    </div >
  );
}
