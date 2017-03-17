import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

import FlexRowView from './FlexRow.jsx';
import FlexColView from './FlexCol.jsx';

import FlexStyles from './styles';
const styles = StyleSheet.create(FlexStyles);

module.exports.FlexRow = class FlexRow extends Component {
    constructor(props) {
        super(props);

        this.render = FlexRowView.bind(this, css(styles.FlexRow), props);
    }
};

module.exports.FlexCol =  class FlexCol extends Component {
    constructor(props) {
        super(props);

        this.render = FlexColView.bind(this, css(styles.FlexCol), props);
    }
};
