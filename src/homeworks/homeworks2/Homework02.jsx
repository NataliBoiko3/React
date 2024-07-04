import ProfileCard from '../../components/ProfileCard';
import './homework02.css'

export default function Homework02(){
    const users =[
        {
         name: 'Natalia',
        lastName: 'Boiko',
        occupation: 'Student',
        hobbies: ['Reading', 'Travel']
    },
    {
        name: 'David',
       lastName: 'Boiko',
       occupation: 'Student',
       hobbies: ['ВМХ', 'Travel']
   },
   {
    name: 'Daria',
   lastName: 'Boiko',
   occupation: 'Schoolgirl',
   hobbies: ['Drawing', 'Travel']
},
] 

return (
    <div className="homework02">
        <h1>Users Profile Cards</h1>
        <div className="profile-container">
            {users.map((user, index) => (
                <ProfileCard key={index} user={user} />
            ))}
        </div>
    </div>
);

}