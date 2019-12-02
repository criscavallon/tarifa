import React from 'react';
import ReactDOM from 'react-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import App from './Tarifa.css'
import Tarifa from './Tarifa';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Teste(){
  const classes = useStyles();
  const [tarifa, setTarifa] = React.useState('');

 /*  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []); */

  const handleChange = event => {
    setTarifa(event.target.value);
  };
  return(
    <FormControl className={classes.formControl}>
       <InputLabel id="demo-simple-select-autowidth-label">Tarifa</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={tarifa}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
  );
}

class Home extends React.Component {
  render(){
    return (
<div class="Screen MatcScreen">
  <div class="Column_1">
    <div class="Row_1">
     <div class="Primary_Label">Como Funciona</div>
     <div class="Label_1"><p>É bem simples, basta escolher o serviço que deseja comparar.</p>
     <br/>
    </div>
   </div>
   <div class="Row_2">
    <div class="DropDown">
    <Tarifa/>
    </div>
    
   </div>
   <div class="Row_3">
     <div class="Primary_Label_1">Quem Somos</div>
     <div class="Label">Um comparativo de tarifas de vários bancos para te ajudar na escolha da menor tarifa. </div>
   </div>
  </div>
</div>
);
  }
}

export default Home;



