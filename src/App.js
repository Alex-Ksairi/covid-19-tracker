// importing scss
import styles from './App.module.scss';

// importing react component 
import React from '../node_modules/react';

// importing the components
import { Cards, Chart, CountryPicker } from './components';

// importing api fetchData
import { fetchData } from './api';

// importing images
import covidImage from './images/image.png';

class App extends React.Component {
  // using the state
  state = {
    data: {},
    country: '',
  }

  // calling the api fetchData
  async componentDidMount () {
    let fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ data: fetchedData });
  };

  handleCountryChange = async (country) => {
    // console.log(country);

    // fetch the data
    let fetchedData = await fetchData(country);
    // console.log(fetchedData);

    // set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    let { data, country } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <img className={styles.image} src={ covidImage } alt='covid-19' />
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
        </div>
      </React.Fragment>
    );
  }

}

export default App;
