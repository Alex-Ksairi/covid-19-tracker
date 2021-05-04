import React from '../../../node_modules/react';
import styles from './CountryPicker.module.scss';

// importing NativeSelect & FormControl from @material.ui
import { NativeSelect, FormControl } from "../../../node_modules/@material-ui/core";

// import countries
import { fetchCountries } from '../../api';

export default function CountryPicker({ handleCountryChange }) {
    let [fetchedCountries, setFetchedCountries] = React.useState([]);

    // useEffect
    React.useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        };
        // calling the function
        fetchAPI();

    }, [setFetchedCountries]);
    

    return (
        <div>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}