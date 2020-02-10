import React, { Component } from 'react'
import '../App.css'

class Weddingparty extends Component {
    render() {
        const {image, title, position, bio} = this.props
        return (
            <div style={{textAlign: 'center', display: 'inline-block', width: '100%', height: '800px'}}>
                <img src={image} alt='Person' />
                <p className='playfair mediumText'>{title}</p>
                <p style={{fontFamily: 'Alex Brush', fontSize: '36px'}}>{position}</p>
                <p style={{fontFamily: 'Playfair Display', fontSize: '22px'}}>{bio}</p>
            </div>
        )
    }
}

export default Weddingparty
