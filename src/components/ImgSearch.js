import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Image from '../components/Image'

const initialState = {
    searchString: '',
    searchClicked: false,
}

class ImgSearch extends Component {
    state = initialState
    onSearchChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
    }
    handleClick = (str) => {
        if (str) {
            this.setState({searchClicked: true})
        } else {
            this.setState({searchClicked: false})
        }
        
    }
    resetClick = () => {
        this.setState(initialState)
    }
    render() {
        return (
            <div>
                <Grid container justify="center">
                <TextField label="Keyword" value={this.state.searchString} onChange={this.onSearchChange} />
                <Button onClick={() => this.handleClick(this.state.searchString)}>
                    <Icon>search</Icon>
                </Button>
                <Button onClick={() => this.resetClick()}>
                    <Icon>delete</Icon>
                </Button>
                </Grid>
                <div>
                    <Image keyword={this.state.searchClicked ? this.state.searchString : ''} />
                </div>
            </div>
        )
    }
}

export default ImgSearch