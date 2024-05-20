import "./sidebar.css"
import { Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, WorkOutline, Bookmark, Event, School, Chat } from "@mui/icons-material"
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Gözat</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Sohbetler</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videolar</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Gruplar</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Yer imleri</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Sorular</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">İşler</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Olaylar</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Dersler</span>
          </li>
        </ul>
        <button className="sidebarButton">Daha Fazla</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
         {Users.map(u=>(
          <CloseFriend key={u.id} user ={u}/>
         ))}
        </ul>
      </div>
    </div>
  )
}