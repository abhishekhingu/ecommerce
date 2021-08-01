/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import './directory.styles.scss';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { storeOptionsAsProperties } from 'commander';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.sections = props.sections;
  }
  render() {
    console.log('directory component render');
    return (
      <div className='directory-menu'>
        {this.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}
const mpaStateToProps = (state) =>
  createStructuredSelector({
    sections: selectDirectorySections,
  });

export default connect(mpaStateToProps)(Directory);
