import Sidebar from "../components/Sidebar";
import ChannelsBar from "../components/ChannelsBar";
import ServerContent from "../components/ServerContent";

function Server() {
  return (
    <div className="flex h-full w-full bg-zinc-900 text-white">
        <Sidebar /> 
        <ChannelsBar />
        <ServerContent />
    </div>
  )
}

export default Server