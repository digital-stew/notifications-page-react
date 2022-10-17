// Notifications 3

// Mark all as read

import angela from "./images/avatar-angela-gray.webp";
import mark from "./images/avatar-mark-webber.webp";
import jacob from "./images/avatar-jacob-thompson.webp";
import rizky from "./images/avatar-rizky-hasanuddin.webp";
import kimberly from "./images/avatar-kimberly-smith.webp";
import nathan from "./images/avatar-nathan-peterson.webp";
import anna from "./images/avatar-anna-kim.webp";
import chess from "./images/image-chess.webp";
type DataArray = {
  read: boolean;
  img: string;
  name: string;
  action: string;
  link: string | false ;
  message: string | false;
  time: string;
};
export const msgData: DataArray[] = [
  {
    read: false,
    img: mark,
    name: "Mark Webber",
    action: "reacted to your recent post ",
    link: "My first tournament today!",
    message: false,
    time: "1m ago",
  },
  {
    read: false,
    img: angela,
    name: "Angela Gray",
    action: "followed you",
    link: false,
    message: false,
    time: "5m ago",
  },
  {
    read: false,
    img: jacob,
    name: "Jacob Thompson",
    action: "has joined your group ",
    link: "Chess Club",
    message: false,
    time: "1 day ago",
  },
  {
    read: true,
    img: rizky,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    link: false,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
  },
  {
    read: false,
    img: kimberly,
    name: "Kimberly Smith",
    action: "commented on your picture",
    link: chess,
    message: false,
    time: "1 week ago",
  },
  {
    read: false,
    img: nathan,
    name: "Nathan Peterson",
    action: "reacted to your recent post ",
    link: "5 end-game strategies to increase your win rate",
    message: false,
    time: "2 weeks ago",
  },
  {
    read: false,
    img: anna,
    name: "Anna Kim",
    action: "left the group ",
    link: "Chess Club",
    message: false,
    time: "2 weeks ago",
  },
];

