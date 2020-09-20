import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
    state = {
        showInfo: false,
    };

    toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    };

    render() {
        const { id, city, img, name, info } = this.props.tour;
        const removeTour = this.props.removeTour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={city} />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{' '}
                        <span onClick={this.toggleInfo}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
    }
}
