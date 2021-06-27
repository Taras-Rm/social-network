import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        // режим редагування
        editMode: false,
        status: ''
    }

    // встановити режим редагування
    setEditMode = () => {
        //alert(this.state.status)
        this.setState({
            editMode: true
        })
    }

    // вимкнути режим редагування
    unsetEditMode = () => {
        this.setState({
            editMode: false
        })
        //даний рядок закоментований, бо немає підписки, якщо буде, то розклментую
        //оновлює статус

        //this.props.updateUserStatus(this.state.status);   !!!!!
    }

    // міняти status в локальному state при змінах в Input
    onInputChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    // для синхронізації локального і глобального state.status
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    // при фокусі інпута виділити весь текст
    handleFocus = (e) => {
        e.target.select();
    }

    render() {
        return (
            <div className={s.profile_status_block}>
                {/* відобразити спан (статус), якщо режим редагування вимкнений, інакше відобразити інпут*/}
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.setEditMode}>{this.state.status || 'Without status'}</span>
                    </div> :
                    <div>
                        <input onFocus={this.handleFocus} 
                        onChange={this.onInputChange} 
                        onBlur={this.unsetEditMode} 
                        //type="text" 
                        value={this.state.status} 
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;