import './myButton.css'

export default function MyButton({type,onClick,name}){
   //console.log(props);посде деструктуризации эта строка не нужна
    return(
        <button type={type} onClick={onClick} 
        className='myButton'>
            {name}
            </button>
            );
}

