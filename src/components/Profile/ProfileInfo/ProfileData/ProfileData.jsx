import React, {useState} from 'react';
import s from './ProfileData.module.css';
import ProfileDataForm from "./ProfileDataForm";

const ProfileData = ({activeProfile, isOwner, updateUserData}) => {

    // встановити режим редагування (прокидую в ProfileDataView та ProfileDataForm)
    const [editMode, setEditMode] = useState(false);

    // при сабміті форми
    const onFormSubmit = (profileData) => {
        updateUserData(profileData).then(() => setEditMode(false));
    }

    return (
        <div>
            {editMode ? <ProfileDataForm activeProfile={activeProfile} onSubmit={onFormSubmit}/> : <ProfileDataView isOwner={isOwner} activeProfile={activeProfile} setEditMode={setEditMode}/>}
        </div>
    )
}

const ProfileDataView = ({activeProfile, setEditMode, isOwner}) => {

    return (
        <div>
            <ul>
                <li>Full name: {activeProfile.fullName}</li>
                <li>About me: {activeProfile.aboutMe}</li>
                <li>Looking for a job: {activeProfile.lookingForAJob.toString()}</li>
                <li>Job description: {activeProfile.lookingForAJobDescription || "nothing"}</li>
            </ul>
            <div>
                {Object.keys(activeProfile.contacts).map(b =>
                    <div>{b}: {activeProfile.contacts[b] || "-----"}</div>)}
            </div>
            { isOwner && <button onClick={() => setEditMode(true)} >Edit</button>}
        </div>
    )
}

export default ProfileData;