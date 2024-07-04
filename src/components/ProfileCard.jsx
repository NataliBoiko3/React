import './profilecard.css';
import photo1 from './images/photo1.jpg';

export default function ProfileCard(){

    const heading = 'Profile card'
const classContainer = 'profilecard-container'

function formatName(user) {
    return `Name: ${user.name}, LastName: ${user.lastName}🧒`
}
const user = {
    name: 'Natalia',
    lastName: 'Boiko',
    occupation: 'Student',
    hobbies: ['Reading', 'Travel']
}
function formatOccupation(occupation) {
    return occupation;
}
function formatHobbies(hobbies) {
    return hobbies.join(', ');
}

return(
<div className={classContainer}>
      <h2>{heading}</h2>
      <img src={photo1} alt="Мое фото"  className="profile-image" />
      <h2>{formatName(user)}</h2>
     
      <h2>{heading}</h2>
      <h3>{formatOccupation(user.occupation)}</h3>
      <div className='hobbies'>
        <h4>{formatHobbies(user.hobbies)}</h4>import photo1 from './images/photo1.jpg';
      </div>

      </div>
        
);
          

 
}








