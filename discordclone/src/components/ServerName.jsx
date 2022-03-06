import { AiOutlineArrowDown } from 'react-icons/ai';

function ServerName(props) {

    const menuOpen = () => {
        alert('can\'t open')
    }

  return (
    <div className="flex justify-around items-center">
        <h2 className="text-xl">{props.serverName}</h2>
        <AiOutlineArrowDown onClick={menuOpen} className="cursor-pointer" />
    </div>
  )
}

export default ServerName