import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            idade: 0,
            maior: null,
            noma: null
        
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick = () => {
        this.setState(
            {
                maior: this.state.idade,
                noma: this.state.nome
               
            });
    }

    render() {

        let resultado = null;
   if(this.state.noma!==null)     
     if(this.state.nome ==="Nayton")
        resultado = <span class="border border-primary">{this.state.nome},ADM delicia</span>
   if (this.state.maior !== null)
            
            if (this.state.maior >= 18)
                resultado = <span class="border border-primary">{this.state.nome},voce tem {this.state.maior} anos, e pode votar!</span>
            else if(this.state.maior<=0){
                resultado = <span class="border border-primary"> {this.state.maior} , idade invalida digite novamente!</span>
            }
          
            else
                resultado = <span class="border border-primary">{this.state.nome},voce tem {this.state.maior} anos, e não pode votar!</span>
        return (
            <div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" name="nome" placeholder="Nero" onChange={this.handleChange}/>
                        <label for="floatingInput">Nome</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" name="idade" placeholder="10" onChange={this.handleChange}/>
                        <label for="floatingInput">idade</label>
                </div>


                <div class="mb-3">
                    <button type="button" onClick={this.handleClick}>Mostar</button>
                </div>
                <div>
                    {resultado}
                </div>
            </div>
        );
    }
}