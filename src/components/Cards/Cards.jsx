import React from '../../../node_modules/react';
import styles from './Cards.module.scss';

// importing @material-ui/core
import { Card, CardContent, Typography, Grid } from "../../../node_modules/@material-ui/core";

// importing countUp
import CountUp from '../../../node_modules/react-countup';

// importing classNames
import cx from '../../../node_modules/classnames';


let Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log(props);

    // a condition needed to upload the data from fetchData and get its value
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={ styles.container }>
            <Grid container spacing={3} justify='center'>
                {/* first card */}
                <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/* second card */}
                <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.recovered) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* third card */}
                <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.deaths) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths causes by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards;
