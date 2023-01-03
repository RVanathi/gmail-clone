import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db, timestamp } from "./firebase";
import "./sendMail.css";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: timestamp,
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>New Message</h3>
        <Close
          className="send-mail-close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send-mail-error">To is required!</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="send-mail-error">Subject is required!</p>
        )}
        <input
          placeholder="Message..."
          type="text"
          className="send-mail-message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="send-mail-error">Message is required!</p>
        )}

        <div className="send-mail-options">
          <Button
            className="send-mail-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
