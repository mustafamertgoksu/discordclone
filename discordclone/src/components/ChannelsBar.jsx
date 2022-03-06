import Channels from "./Channels";
import ServerName from "./ServerName";

function ChannelsBar() {
  return (
    <div className="ChannelsBar">
        <ServerName serverName="Web Development" />
        <hr className="border-solid border-top-2 border-gray-400" />
        <Channels />
    </div>
  )
}

export default ChannelsBar;