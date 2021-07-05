import React from 'react';
import s from './FormsControls.module.css';
import style from './../../Profile/MyPosts/MyPosts.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  let hasError = meta.error && meta.touched;
  return (
    <div className={`${s.formControll} ${hasError ? s.error : ''}`}>
      <textarea {...input} {...props} type="textarea"/>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  let hasError = meta.error && meta.touched;
  return (
    <div className={`${s.formControll} ${hasError ? s.error : ''}`}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
