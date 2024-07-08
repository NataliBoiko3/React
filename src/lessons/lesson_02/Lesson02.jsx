
import MyButton from '../../components/myButton/MyButton';
import './lesson02.css';

export default function Lesson02(){

    const handleClick = () => {
        console.log('click!');
      }
      const handleSubmit = () => {
        console.log('submit!');
      }
      const handleHase = () => {
        console.log('🐇');
      }

return(

    <div className='lesson-container'>
      <h4>lesson02</h4>
      <p>React Props: способ обмена данными из компонента в компонент</p>
       <h5>Мы хотим наш компонент кнопку с разными данными...</h5>
   <div>
    <MyButton type={'button'}  onClick ={handleClick} name={'click'}/>
    <MyButton type={'submit'} onClick ={handleSubmit} name={'submit'}/>
    <MyButton type={'reset'} onClick ={handleHase} name={'🐇'}/>
   </div>



    </div>

    
)
}