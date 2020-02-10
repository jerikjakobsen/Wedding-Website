import React, { Component } from 'react'
import Guest from '../components/guest'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import '../Rsvp.css'

/*  TODO: Write a function to go through the searched name
    and capitalize the first letter of first/middle/last name
    (All names in database are capitalized)
*/
class Rsvp extends Component {
    constructor() {
        super()
        this.state={
            search: '',
            originalAttendeesList: [],
            partyAttendees: [],
            error: ''
        }
    }

    searchChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    searchName = () => {
        const name = this.state.search.replace(' ', '%20')
        axios.get(`/guests/${name}`)
        .then((res) => {
            if (res) {
            this.setState({
                originalAttendeesList: res.data.members,
                partyAttendees: res.data.members,
                error: ''
            })
        }
        })
        .catch(err => {
            console.error(err)
            this.setState({error: `${this.state.search} not found, please contact Jena to ask about an RSVP. Thank-you!`})
        })
    }

    guestRsvpCallBack = data => {
        const newList = this.state.partyAttendees.filter(person => person.name !== data.name)
        newList.push(data)
        const sortedNewList = newList.sort((a,b)=> (a.name > b.name ? 1 : -1))
        this.setState({partyAttendees: sortedNewList})
    }

    onUnload = () => {
        const {partyAttendees, originalAttendeesList} = this.state
        if (JSON.stringify(partyAttendees) !== JSON.stringify(originalAttendeesList)) {
            axios.post('/guests',{
                party: this.state.partyAttendees[0].party,
                members: partyAttendees
            })
            .then(() => {
                console.log("Guest information successfully changed!")
            })
            .catch(err => {
                console.error(err)
            })
        } else {
            console.log("Guest hasn't made any changes!")
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.onUnload)
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{marginBottom: '10%'}}>
                    <input className='search' onChange={this.searchChange} value={this.state.search} name='search' type='text' placeholder='Search your name to RSVP' />
                    <Button className='searchButton' onClick={this.searchName} variant="contained">Search</Button>
                    <p className='error'>{this.state.error}</p>
                </div>
                <div style ={{marginBottom: '40px'}}>
                    {this.state.partyAttendees.map((pers,i) => {
                        return <Guest callback ={this.guestRsvpCallBack} key={i} party={pers.party} attending={pers.attending} name={pers.name} />
                    })}
                </div>
            </div>
        )
    }
}

export default Rsvp
