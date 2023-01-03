import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

import "./emailRow.css";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    navigate("/mail");
  };
  return (
    <div className="email-row" onClick={openMail}>
      <div className="email-row-options">
        <CheckBoxOutlineBlank />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h4 className="email-row-title">{title}</h4>
      <div className="email-row-message">
        <h4>
          {subject}{" "}
          <span className="email-row-description">- {description}</span>
        </h4>
      </div>
      <p className="email-row-time">{time}</p>
    </div>
  );
};

export default EmailRow;
