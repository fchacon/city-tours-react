import React, { Component } from 'react';
import './TourList.scss';
import { tourData } from '../../tourData';
import Tour from '../Tour/Tour';

export default class TourList extends Component {
    state = {
        tours: tourData,
    };

    removerTour = (id) => {
        const tours = this.state.tours.filter((tour) => tour.id !== id);
        this.setState({ tours });
    };

    render() {
        const tours = this.state.tours;
        return (
            <section className="tour-list">
                {tours.map((tour) => (
                    <Tour
                        key={tour.id}
                        tour={tour}
                        removeTour={this.removerTour}
                    />
                ))}
            </section>
        );
    }
}
