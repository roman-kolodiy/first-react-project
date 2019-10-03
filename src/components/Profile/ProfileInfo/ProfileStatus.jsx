import React from 'react';


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
    };

    // activeEditMode = () => {
    //     alert('hey')
    // };
    activeEditMode = () =>  {
        this.setState({
            editMode : true
        });
    };

    deActiveEditMode = () => {
        this.setState({
            editMode : false
        });
    };


    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus='true' onBlur={this.deActiveEditMode} type="text" value={this.props.profile.data.aboutMe}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.profile.data.aboutMe}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;