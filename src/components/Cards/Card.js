import React from 'react';
import CountUp from 'react-countup';
import Preloader from '../Loader/Preloader';

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return <Preloader />;
    }
    return (
        <div className="row">

            <div className="col s12 m4">
                <div className="card white infected">
                    <div className="card-content">
                        <h6 className="title">
                            Infacted
                            </h6>
                        <h2><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></h2>
                        <span className="date">{new Date(lastUpdate).toDateString()}</span>
                        <p>Number of active cases of COVID-19.</p>
                    </div>

                </div>
            </div>
            <div className="col s12 m4">
                <div className="card white recovered">
                    <div className="card-content">
                        <h6 className="title">
                            Recovered
                            </h6>
                        <h2><CountUp start={0} end={recovered.value} duration={2.75} separator="," /></h2>
                        <span className="date">{new Date(lastUpdate).toDateString()}</span>
                        <p>Number of recoveries  from COVID-19.</p>
                    </div>

                </div>
            </div>
            <div className="col s12 m4">
                <div className="card white deaths">
                    <div className="card-content">
                        <h6 className="title">
                            Deaths
                            </h6>
                        <h2><CountUp start={0} end={deaths.value} duration={2.75} separator="," /></h2>
                        <span className="date">{new Date(lastUpdate).toDateString()}</span>
                        <p>Number of deaths caused by COVID-19.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Card;
