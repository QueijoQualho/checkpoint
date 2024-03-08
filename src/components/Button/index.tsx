import "./style.css"

type ButtonProps = ({
    title:string
})

function Button({title}:ButtonProps){
    return (
        <button className="butao" type="button">{title}</button>
    )
}

export default Button