import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem.jsx/DialogItem';
import Message from './Message.jsx/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
import { Textarea } from '../common/FormsControls/FormsControls';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => <Message message={message.message} />);

  const addMesage = (values) => {
    props.addMessage(values.messageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>

        <ReduxAddMessageForm onSubmit={addMesage} />
      </div>
    </div>
  );
};

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.new_message}>
      <div>
        <Field
          component={Textarea}
          name={'messageBody'}
          validate={[requiredField, maxLength50]}
          placeholder={'    new message . . .'}
        />
      </div>
      <div>
        <button className={s.btn_green}>Send</button>
      </div>
    </form>
  );
};

const ReduxAddMessageForm = reduxForm({
  form: 'dialogAddMessage',
})(AddMessageForm);

export default Dialogs;
