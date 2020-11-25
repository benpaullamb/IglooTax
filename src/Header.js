import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="header__logo">igloo</span>
                <span className="header__title">Income Tax Calculator</span>
            </header>
        );
    }
}