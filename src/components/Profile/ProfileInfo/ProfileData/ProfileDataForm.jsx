import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import s from "./ProfileData.module.css";

const ProfileDataForm =({handleSubmit, activeProfile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>Full name: <Field name={"fullName"} component={Input} type={"text"} placeholder={"Full name"}/> </li>
                <li>About me: <Field name={"aboutMe"} component={Textarea} type={"text"} placeholder={"About me"}/> </li>
                <li>Looking for a job: <Field name={"lookingForAJob"} component={Input} type={"checkbox"} placeholder={"Looking for a job"}/> </li>
                <li>Job description: <Field name={"lookingForAJobDescription"} component={Textarea} type={"text"} placeholder={"Job description"}/> </li>
            </ul>
            <div>
                {Object.keys(activeProfile.contacts).map(b =>
                    <div>{b}: <Field name={`contacts.${b}`} component={"input"} type={"text"} placeholder={b}/> </div>)}
            </div>
            {error && <div className={s.incorectData}>{error}</div>}
            <button type={"submit"} >Save</button>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({form: "profileData"})(ProfileDataForm);

export default ProfileDataFormRedux;