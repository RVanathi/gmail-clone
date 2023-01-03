import React from "react";
import { Button, IconButton } from "@mui/material";
import "./sidebar.css";
import {
  AccessTime,
  Duo,
  Edit,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar-compose"
        startIcon={<Edit fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" selected={true} number={57} />
      <SidebarOption Icon={Star} title="Starred" number={57} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={80} />
      <SidebarOption Icon={LabelImportant} title="Important" number={80} />
      <SidebarOption Icon={NearMe} title="Sent" number={80} />
      <SidebarOption Icon={Note} title="Drafts" number={80} />
      <SidebarOption Icon={ExpandMore} title="More" number={80} />
      <div className="sidebar-footer">
        <div className="sidebar-footIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
