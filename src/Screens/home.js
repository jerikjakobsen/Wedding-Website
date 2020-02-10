import React, { Component } from 'react'
import '../App.css';
import mainPic from '../assets/466F17BB-45C1-460B-9415-F1427BD8C142_1_105_c.jpeg'
import iosDownload from '../assets/download-on-the-app-store-apple.svg'
import androidDownload from '../assets/google-play-badge.svg'
import theguest from '../assets/Theguest.png'
import snapchat from '../assets/snapchat.svg'

class Home extends Component {
    render() {
        return (
            <div>
                <img className='mainPic' src={mainPic} alt= 'MattJena' />
                <p className='centerText padding bigText'>Join <br/> Matthew Rodriguez <br/> and <br/> Jenafer Morton < br/><span style={{fontFamily: 'Playfair Display', paddingTop: '30px'}}> <br/> 6 | 12 | 2020 <br/><span style={{fontSize: '26px', fontFamily: 'Barlow Condensed'}}>#MATTANDJENA2020</span></span></p>
                <p className='centerText playfair mediumText'>
                Greentree Country Club<br/>
                538 Davenport Avenue<br/>
                New Rochelle, NY 10805
                </p>
                <p className='centerText playfair mediumText'>CEREMONY WILL BEGIN AT<br/>7:00 PM<br/>
                PLEASE ARRIVE AT 6:30 PM <br/> Reception to Follow</p>
                <p className='centerText playfair'>Black-Tie Event</p>
                <p className='centerText playfair'>Free Parking Available</p>


                <p className='centerText playfair mediumText'>Download The Guest App</p>
                <div className='centerText'>
                <img style={{display: 'inline-block', width: '200px', height: 'auto'}} src={theguest} alt='Guest App' />
                </div>
                <p className='centerText playfair'>Allows guests to take and share their Photos with each other,<br/> as well as with the Bride and Groom.</p>
                <div className='centerElement'>
                <a href='https://apps.apple.com/us/app/the-guest-photo-sharing/id1105933454'><img style={{display: 'inline-block', marginRight: '20px'}} src={iosDownload} alt='Download on iOS'/></a>
                <a href='https://play.google.com/store/apps/details?id=com.veri.veri&hl=en_US'><img style={{display: 'inline-block'}} src={androidDownload} alt='Download on Anroid' /></a>
                </div>


                <p className='centerText playfair mediumText'>Download Snapchat</p>
                <div className='centerText'>
                <img style={{display: 'inline-block'}} src={snapchat} alt='Snapchat' />
                </div>
                <p className='centerText playfair'>Will allow guests to use a same day wedding filter, celebrating Matt <br/>and Jena's big day. #MattandJena2020</p>
                <div className='centerElement'>
                <a href='https://apps.apple.com/us/app/snapchat/id447188370'><img style={{display: 'inline-block', marginRight: '20px'}} src={iosDownload} alt='Download on iOS'/></a>
                <a href='https://play.google.com/store/apps/details?id=com.snapchat.android&hl=en_US'><img style={{display: 'inline-block'}} src={androidDownload} alt='Download on Anroid' /></a>
                </div>
                <footer className='centerText'>Create by John Jakobsen</footer>
            </div>
        )
    }
}

export default Home
