import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    // встановити режим редагування
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])


    // вимкнути режим редагування
    const unsetEditMode = () => {
        setEditMode(false);
        // Оновлення статусу (запит на сервер)
        props.updateUserStatus(status);//   оновлення статусу (обмежене АРІ сервера)!!!!!
    }

    const onInputChange = (e) => {
        setStatus(e.target.value);
    }

    // при фокусі інпута виділити весь текст
    const handleFocus = (e) => {
        setStatus(e.target.value)
    }

        return (
            <div className={s.profile_status_block}>
                {/* відобразити спан (статус), якщо режим редагування вимкнений, інакше відобразити інпут*/}
                {!editMode ?
                    <div>
                        <span onClick={() => setEditMode(true)}>{status || "Without status"}</span>
                    </div> :
                    <div>
                        <input value={status} onFocus={handleFocus} onBlur={unsetEditMode} onChange={onInputChange}
                        />
                    </div>
                }
            </div>
        );

}

export default ProfileStatus;