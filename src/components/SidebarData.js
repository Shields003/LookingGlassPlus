import React from "react";
import * as AiIcons from "react-icons/ai";
import { MdOutlineFlight } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineWidgets } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Big Chart",
    path: "/bigchart",
    icon: <AiOutlineAreaChart />,
    cName: "nav-text",
  },
  {
    title: "Widgets",
    path: "/widgets",
    icon: <MdOutlineWidgets />,
    cName: "nav-text",
  },
  {
    title: "Weather",
    path: "/weather",
    icon: <TiWeatherPartlySunny />,
    cName: "nav-text",
  },
     {
     title: "Flights",
     path: "/flights",
     icon: <MdOutlineFlight />,
     cName: "nav-text",
     },
     
];
