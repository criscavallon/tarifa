import React from 'react';
import ReactDOM from 'react-dom';
import App from './Screen.css'
/*import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
*/

class Tarifa extends React.Component {
  /*const classes = useStyles();
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };
*/
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
//	<FormControl className={classes.formControl}>
//       <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>

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

