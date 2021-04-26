import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import './ProfileDetails.css';
import profilePic from '../../assets/profileImage.jpg';

// This component shows the user details. 

class ProfileDetails extends Component {
    render() {
        return (<div className="profile_details-main-div">
                <div className="profile_pic-div" onClick={this.takeToHomePageHandler}>
                    <Avatar style={{width:100, height:100}} alt="upgrad logo" src={profilePic} />
                </div>
                <div className="user_profile_data_numbers-div">
                    <div className="profile-data-username-bold-div">
                        <p>{this.props.profileScreen.state.username}</p>
                    </div>
                    <div className="grid-post-count-div">
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={4}>
                                Posts: {this.props.profileScreen.state.mediaCount}
                            </Grid>
                            <Grid item xs={12} md={4}>
                                Follows: 136
                            </Grid>
                            <Grid item xs={12} md={4}>
                                Followed By: 63
                            </Grid>
                        </Grid>
                        <br/>
                    </div>
                    <div className="edit_icon_tag-div">
                        <div className="tag-div">
                        {this.props.fullName}
                        </div>
                        <div onClick={this.props.profileScreen.openModalHandler}>
                            <Avatar style={{backgroundColor:'#fb3640'}}>
                                <EditIcon/>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>);
    }

    
    takeToHomePageHandler = () => {
        this.props.profileScreen.takeToHomePage();
    }
}

export default ProfileDetails;