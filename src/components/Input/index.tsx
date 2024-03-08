import "./style.css"

type InputProps = ({
    type:string,
    placeholder:string
})

function Input ({type, placeholder}: InputProps){
    return (
        <input className="inputLogin" id="email" type={type} placeholder={placeholder}/>
    )
}

export default Input