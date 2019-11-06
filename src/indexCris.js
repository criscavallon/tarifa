import React from 'react';
import ReactDOM from 'react-dom';
import './Screen.css';
import App from './App';


class Tarifa extends React.Component {
    render(){
    return (
<div class="Screen MatcScreen">
  <div class="Column_1">
    <div class="Row_1"><img src="/cris/web/lab01/tarifa/scr/logo.jpg" class="Image" />
     <div class="Primary_Label">Como Funciona</div>
     <div class="Label_1"><p>São apenas 2 passos:</p>
     1. Escolha o serviço bancário que deseja comparar.<br/>
     2. Informe a quantidade que utiliza por mês.
    </div>
   </div>
   <div class="Row_2">
    <div class="DropDown" />
    <div class="DropDown_1" />
    <div class="OK">OK</div>
   </div>
   <div class="Row_3">
     <div class="Primary_Label_1">Quem Somos</div>
     <div class="Label">O Preço da conta PJ é um comparativo de tarifas de vários bancos para ajudar o empresário de Micro e Pequenas Empresas na escolha do menor preço. </div>
   </div>
  </div>
</div>
);
  }
}

export default App;


ReactDOM.render(
  <Tarifa />,
  document.getElementById('root')
);

