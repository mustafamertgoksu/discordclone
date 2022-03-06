import Friend from "./Friend";
import {
    NavLink
} from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';

function FriendList() {
    return(
        <div>
            <div className="flex justify-between">
                <h3 className="pl-2 text-[#dbdbdbd5] hover:text-gray-100 my-2">Direct Messages</h3>
                <AiOutlinePlus className="my-[12px] mr-4 cursor-pointer" />
            </div>
            <ul>
                <li>
                    <NavLink to="/home">
                         <Friend name="Person1" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farchive.org%2Fdownload%2Fdiscordprofilepictures%2Fdiscordgreen.png&f=1&nofb=1" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home">
                        <Friend name="Person2" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farchive.org%2Fdownload%2Fdiscordprofilepictures%2Fdiscordgreen.png&f=1&nofb=1" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home">
                        <Friend name="Person3" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farchive.org%2Fdownload%2Fdiscordprofilepictures%2Fdiscordgreen.png&f=1&nofb=1" />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default FriendList;