import React from 'react';
import Home from "./components/home";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart,  } from 'recharts';


class App extends React.Component{
 render () {
   return (
     <div>
        <Home/>
      </div>
      
    );
  }
}
export default App
