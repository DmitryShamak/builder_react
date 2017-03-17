import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

import TextView from './Text.jsx'

import InputStyles from './styles';
const styles = StyleSheet.create(InputStyles);

module.exports.Text = class extends Component {
    constructor(props) {
        super(props);

        this.render = TextView.bind(this, css(styles.Text), props);
    }
};
