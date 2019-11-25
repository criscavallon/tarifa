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

 /*  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []); */

  const handleChange = event => {
    console.log("111111111111111111111 " + event.target.value)
    setAge(event.target.value);
    fetch("https://olinda.bcb.gov.br/olinda/servico/Informes_ListaTarifaPorValores/versao/v1/odata/ListaTarifasPorValores(CodigoGrupoConsolidado=@CodigoGrupoConsolidado,CodigoServico=@CodigoServico)?%40CodigoGrupoConsolidado=03&%40CodigoServico=" + event.target.value + "&%24format=json")
 
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            )
  };
  return(
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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
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


