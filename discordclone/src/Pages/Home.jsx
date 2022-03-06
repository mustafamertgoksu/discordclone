import ChatMenu from "../components/ChatMenu";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

function Home() {
	return(
		<div className="App flex text-white">
          <Sidebar /> 
      	  <ChatMenu />
      	  <Content />
    </div>
	)
}

export default Home;