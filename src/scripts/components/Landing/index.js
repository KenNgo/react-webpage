import React from 'react';
import ReactTable from 'react-table';

class LandingPage extends React.Component {
	constructor (props) {
      super(props);
      this.state = {
        data:  [
          {
            typeClient: 'Individual',
            name: 'Pinco Pallino',
            city: 'Rome',
            intermediario: 'Albaro - Sai',
            status: 'Client'
          },
          {
            typeClient: 'Individual',
            name: 'Silver Wave',
            city: 'Venice',
            intermediario: 'Brosel S.P.A',
            status: 'Prospect'
          },
          {
            typeClient: 'Business',
            name: 'Autumn Sailing Limited',
            city: 'Florence',
            intermediario: 'Antea S.R.L',
            status: 'Client'
          },
          {
            typeClient: 'Individual',
            name: 'Nae Moni',
            city: 'Venice',
            intermediario: 'A.I.B SRL(ROMA)',
            status: 'Client'
          },
          {
            typeClient: 'Business',
            name: 'Sun Odissey Limited',
            city: 'Milan',
            intermediario: 'AON S.P.A(AN)',
            status: 'Prospect'
          },
          {
            typeClient: 'Business',
            name: 'Oceanis Limited',
            city: 'Naples',
            intermediario: 'Antea S.R.L',
            status: 'Client'
          }
        ]
      };
  }

	render() {
    const { data } = this.state;
		return (
    		<div>
            <header>
              <h3>Lista Contatti</h3>
              <a href="#">Logo</a>
            </header>
            <div className="buttons">
              <button>Back</button>
              <button>Next</button>
            </div>
            <div className="contact-list">
              <ReactTable
                data={data}
                columns={[
                  {
                    Header: "Tipo Cliente",
                    accessor: 'typeClient'
                  },
                  {
                    Header: "Nome",
                    accessor: 'name'
                  },
                  {
                    Header: 'Citta`',
                    accessor: 'city'
                  },
                  {
                    Header: 'Intermediario',
                    accessor: 'intermediario'
                  },
                  {
                    Header: 'Stato',
                    accessor: 'status'
                  }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            </div>
        </div>
  		);
	}
}
export default LandingPage;