import { FaPeopleGroup } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdContactMail, MdMiscellaneousServices } from "react-icons/md";

export const Links = [
  {
    name: "Home",
    hash: "#home",
    icon: <GoHomeFill />,
  },
  {
    name: "Services",
    hash: "#serices",
    icon: <FaPeopleGroup />,
  },
  {
    name: "Contacts",
    hash: "#contacts",
    icon: <MdContactMail />,
  },
  {
    name: "Team",
    hash: "#teams",
    icon: <MdMiscellaneousServices />,
  },
];
