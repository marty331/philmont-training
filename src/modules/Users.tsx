import Bar from '../components/Bar';
import users from '../data/userData.json';

import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from "@fluentui/react-components";
import { UserInterface } from "../interfaces/UserInterface";
import { grandcanyon, tellepsen, texastech, austin, strake, dallas, philmont } from  '../images/images';


const Users = () => {
  const userData: UserInterface[] = users.users;
  const getInitials = (name: string): string => {
    const names = name.split(' ')
    return names[0][0] + " " + names[1][0];
  }
  
  return (
    <>
      <h1 className='userHeader'>Troop 106 Philmont Training</h1>
      <div className="trainingWrapper">
        {userData.map((user) => {
          return (
          <div className="userWrapper" key={user.id}>
            <div className="personWrapper">
              <div className="iconWrapper" >
                <PersonIcon/>
                { getInitials(user.name)}
              </div>
              <span>{user.adult ? user.nickname : user.name}</span>
            </div>
            <div className="milesWrapper">
              <Bar width={user.totalMiles} color={user.color} >
              <div className="header">
              {user.totalMiles >= 24 && 
                <Avatar id={user.id + 'grandcanyon'} image={{src: grandcanyon}} size={28} />}
                {user.totalMiles >= 51 && 
                <Avatar id={user.id + 'tellepsen' } image={{src: tellepsen}} size={28} />}
                {user.totalMiles >= 93 && 
                <Avatar id={user.id + 'strake' } image={{src: strake}} size={28} />}
                {user.totalMiles >= 146 && 
                <Avatar id={user.id + 'austin' } image={{src: austin}} size={28} />}
                {user.totalMiles >= 251 && 
                <Avatar id={user.id + 'dallas' } image={{src: dallas}} size={28} />}
                {user.totalMiles >= 497 && 
                <Avatar id={user.id + 'texastech' } image={{src: texastech}} size={28} />}
                {user.totalMiles >= 813 && 
                <Avatar id={user.id + 'philmont' } image={{src: philmont}} size={28} />
                }
              </div>
              </Bar>
              <p>{ user.totalMiles }</p>
            </div>
          </div>)
        })}
      </div>
    </>
  )
}

export default Users;
