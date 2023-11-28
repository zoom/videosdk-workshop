import { createContext } from "react";
import ZoomVideo from "@zoom/videosdk";

const client = ZoomVideo.createClient();
const meetingArgs = {
  topic: "Zoom_Workshop",
  name: "",
  password: "",
  roleType: 1 || 0,
};

export const ClientContext = createContext(client);
export const UserContext = createContext(meetingArgs);
