import Button from '../Button'
import Input from '../Input'
import "./style.css"

function Menu() {
    return (
        <div className="rightSide">

            <h1>Bem vindo</h1>
            <form className="form">
                <Input type='email' placeholder='E-mail'></Input>
                <Input type='password' placeholder='Senha'></Input>
                <Button title='Submit'/>
            </form>
        </div>
    )
}

export default Menu