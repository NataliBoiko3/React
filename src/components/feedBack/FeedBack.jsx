import './feedback.css'
import MyButton from '../myButton/MyButton'
import { useState } from 'react';


export default function FeedBack(){
   
        const [likes, setLikes] = useState(0);
        const [disLikes, setDisLikes] = useState(0);

        const handleLike = () => {
            setLikes ( likes => likes +1)
        }

        const handleDisLike = () => {
            setDisLikes ( disLikes => disLikes +1)
        }

        const handleReset = () => {
            setLikes(0);
            disLikes(0);
        };
        return(
            <div className='lesson-container'>
    <MyButton type={'button'}  onClick ={handleLike} name={'Like'}/>
    <span>{likes}</span>
    <MyButton type={'submit'} onClick ={handleDisLike} name={'Dislike'}/>
    <MyButton type={'reset'} onClick ={handleReset} name={'Reset Results'}/>
   

            </div>
    );
}