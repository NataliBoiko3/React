import './myInput.css'

export default function MyInput({label,type,name,placeholder}) {
    //console.log(props);
    return(
        <>
        <label className='label'>{label}</label>
        <input type={type} name ={name}placeholder={placeholder}/>
        </>
    )
}