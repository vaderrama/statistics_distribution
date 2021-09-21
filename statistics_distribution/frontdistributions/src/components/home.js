import React, {Component} from 'react'
import './home.css';
import Distribution from "./distributions";
import Add from "./add"
import {Card, Col, Container, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Form} from "react-bootstrap";
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart,Legend  } from 'recharts';
import { CSVLink, CSVDownload } from "react-csv";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            samples:1,
            data:[],
            type:"",
            charts:[],
            n:1,
            listCharts:[],
            selected:"",
            loadData:false,
            loadFormat:false,
            dataForChart:[],
            
        };
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnRemove = this.handleOnRemove.bind(this);
        this.handleOnCharts = this.handleOnCharts.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeSamples = this.handleChangeSamples.bind(this);
        this.handleSelectedDistributions = this.handleSelectedDistributions.bind(this);
     
       
         
    }

    handleOnCharts() {
      console.log(this.state);
      let {loadData,loadFormat} = this.state;
      this.setState({
        loadFormat: false,
      });
        let config = {
            params: {
                data: this.state.data,
                samples: this.state.samples,
                n: this.state.n,
            },
        }  
        // Peticion para obtener los datos del servidor 
        axios.get(`http://127.0.0.1:8000/api-dist/get_charts`, config)
            .then(response => {
                console.log("Getting data from server")
                console.log(response.data)
                this.setState({
                  loadData: true,
                    charts: response.data,
                });

                // Formateamos los datos para poder tratarlos con la libreria de Recharts 
                let indice,dat;
                let {samples,charts,loadFormat,dataForChart,n,listCharts} = this.state;
                
                if(!loadFormat){
                 
                for (let i = 0; i < n; i++) {
                  dataForChart=[];
                  for (let j = 0; j < samples; j++){
                    
                    indice = j.toString();
                     dat = {
                       name : indice,
                       uv : charts[i][j], 
                     }
                    
                  dataForChart.push(dat);
               }
               listCharts.push(dataForChart);
              }
             
               this.setState({
                 dataForChart:dataForChart,
                 loadFormat:true,
                 listCharts:listCharts,
                });
              
              }
            })
    }
  
    
// Funcion que muestra los datos ya obtenidos y formateados 
    showChart(){
      let rows = []; 
      const {n, listCharts} = this.state;
      for (let i = 0; i < n; i++) {
          rows.push(
            <div className="charts">

            <h4>{i}</h4>
            <LineChart
            width={500}
            height={300}
            data={listCharts[i]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          <CSVLink data={listCharts[i]}>Download CSV</CSVLink>
          </div>
           );
          }
      return rows;
    }
    
    // Añadimos un desplegable 
    addRow(){
        let row = [];
        const {n} = this.state;

        for(var i=0; i<n; i++){
            row.push(
              <div>
                <h6>{i}</h6>
                <Add key={i} type={this.type}  handleSelectedDistributions={this.handleSelectedDistributions}/>
                </div>
            );
        }
        return row;
    }
    
    handleOnAdd(){
        let {n} = this.state;
        this.setState({n : n+1})
    }

    handleOnRemove(){
        let {n} = this.state;
        this.setState({n : n-1})
      };

    handleChangeType(e){
        this.setState({ type: e.target.value });
      }

    handleChangeSamples(e){
          this.setState({samples : e.target.value});
      }

    handleSelectedDistributions(value){
        let {data} = this.state;
        let {n} = this.state;
        data[n] = value.value;
        this.setState({data});
       
    }
    

    render() {
      const {loadFormat,loadData} = this.state
        return (
          
            <div className="main_block">
                <h1>Statistics science : Probability Distributions </h1>

                <div className = "options_block">
                    <div className = "type_block position">
                        <h4>Choose the type of the Distribution</h4>
                        <select id="type" onChange={this.handleChangeType}>
                           
                            <option value="discrete">Discrete Probability</option>
                            <option value="continuous">Continuous Probability</option>
                        </select>
                    </div>
                    <div className = "add_block position">
                        <h4>Add distributions</h4>
                        <button onClick={this.handleOnAdd} type="button" class="btn btn-primary btn-secondary">+</button>
                        {this.addRow()}
                        <button onClick={this.handleOnRemove} type="button" class="btn btn-primary btn-secondary">-</button>
                    </div>
                    <div className="samples_block position">
                        <h4>Introduce number of samples</h4>
                        <input id="samples" onChange={this.handleChangeSamples} type="number"></input>
                        <button onClick={this.handleOnCharts} type="button" class="btn btn-success">Press when u are ready</button>

                    </div>
                </div>

                <div className = "charts_block position">
                    <h4>Charts</h4>
                  
                    {loadFormat ? this.showChart() : null}
                    
                </div>
              
            </div>
        )
    }
}
export default Home;


   /*
    formatData(){
      let indice,dat;
      let {samples,charts,loadFormat,dataForChart,n,listCharts} = this.state;
      
      if(!loadFormat){
       
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < samples; j++){
          
          indice = j.toString();
           dat = {
             name : indice,
             uv : charts[i][j], 
           }
          
        dataForChart.push(dat);
     }
     console.log(i);
     listCharts.push(dataForChart);
     console.log(listCharts);
    }
   
     this.setState({
       dataForChart:dataForChart,
       loadFormat:true,
       listCharts:listCharts,
      });
    
    }
   }
  
*/