import React from 'react';
import App from './App';

class tarifa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {
        fetch("https://olinda.bcb.gov.br/olinda/servico/Informes_ListaTarifaPorValores/versao/v1/odata/GruposConsolidados?%24format=json\" -H  \"accept: application/json;odata.metadata=minimal")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
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

                <ul>
                    {items.map(item => (
                            <li key={item.name}>
                                {item.name} {item.price}
                            </li>
                        ))}
                </ul>

            );

        }
  }
}

React.createElement("div", {
  className: "tarifa"
}

export default App;


