import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

import InputStyles from './styles';
const styles = StyleSheet.create(InputStyles);

module.exports.Text = class extends Component {
    constructor(props) {
        super(props);

        this.render = () => (React.createElement('input', props));
    }
};
