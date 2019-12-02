import React from 'react';
import ReactDOM from 'react-dom';
import App from './Tarifa.css'
import FormHelperText from '@material-ui/core/FormHelperText';
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

function Teste(props){
  const classes = useStyles();
  const [age, setAge] = React.useState('');
 let state = [];


  const handleChange = event => {
    
    setAge(event.target.value);
    fetch("https://olinda.bcb.gov.br/olinda/servico/Informes_ListaTarifaPorValores/versao/v1/odata/ListaTarifasPorValores(CodigoGrupoConsolidado=@CodigoGrupoConsolidado,CodigoServico=@CodigoServico)?@CodigoGrupoConsolidado='03'&@CodigoServico='"+event.target.value+"'&$top=100&$format=json&$select=Cnpj,RazaoSocial,ValorMaximo,Periodicidade")
 
            .then(res => res.json())
            .then((result) => {
			state = result.value;
			return(<div>{state}</div>);
                },
                
                (error) => {
                    console.log(error);
                }
            )
  };

  return(
<div>
    <FormControl className={classes.formControl}>
       <InputLabel id="demo-simple-select-autowidth-label">Tarifa</InputLabel>
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
            {props.items.map(item => (
                <MenuItem value={item.Codigo}>
                    {item.Nome}
                </MenuItem>
            ))}
        </Select>
        <FormHelperText>Selecione</FormHelperText>
      </FormControl>
<h1>{console.log(state)}</h1>
</div>
  );
}

class Tarifa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    handleChange = event => {
        this.setAge(event.target.value);
    };


    componentDidMount() {
        fetch("https://olinda.bcb.gov.br/olinda/servico/Informes_ListaTarifaPorValores/versao/v1/odata/ServicosBancarios?$top=100&$format=json&$select=Codigo,Nome")
 
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.value	
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <Teste items={items} />

        

            );

        }
  }
}

export default Tarifa;


