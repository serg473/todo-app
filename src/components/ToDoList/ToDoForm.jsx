import { useState } from "react";
import { addToDoItem,dataEditingToDoItem } from "../../store/Slice/toDo";
import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import Errors from "../Errors";

const ToDoModal = (props) => {
  const dispatch = useDispatch();
  const required = "Необходимо заполнить поле!";
  const handleSubmit = (values, { setSubmitting }) => {
    if (!props.editData) {
      let uniq = new Date().getTime();
      values.id = uniq;
      dispatch(addToDoItem(values));
    } else{
      dispatch(dataEditingToDoItem(values))
    }
    props.disableModal(false);
    setSubmitting(false);
  };
  const handleValidateName = (values) => {
    let error;
    if (!values) {
      error = required;
    }
    return error;
  };
  return (
    <div className="modal-window">
      <div className="modal-window__container">
        {!props.editData && (
          <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
            {({ isSubmitting, values, touched, errors }) => (
              <Form className="modal-window__form form">
                <div>
                  <span className="label">Название дела</span>
                  <Field
                    type="text"
                    name="name"
                    validate={handleValidateName}
                  />
                  {errors.name && touched.name && (
                    <Errors error={errors.name} />
                  )}
                </div>
                <div className="form--block-button">
                  <button type="submit">Добавить запись</button>
                  <button onClick={() => props.disableModal(false)}>
                    Отмена
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
        {props.editData && (
          <Formik initialValues={props.editData} onSubmit={handleSubmit}>
            {({ isSubmitting, values, touched, errors }) => (
              <Form className="modal-window__form form">
                <div>
                  <span className="label">Название дела</span>
                  <Field
                    type="text"
                    name="name"
                    validate={handleValidateName}
                  />
                  {errors.name && touched.name && (
                    <Errors error={errors.name} />
                  )}
                </div>
                <div className="form--block-button">
                  <button type="submit">Изменить запись</button>
                  <button onClick={() => props.disableModal(false)}>
                    Отмена
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ToDoModal;
