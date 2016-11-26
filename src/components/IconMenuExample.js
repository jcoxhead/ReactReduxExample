import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { browserHistory } from 'react-router'
// import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import ContentFilter from 'material-ui/svg-icons/content/filter-list';
// import FileFileDownload from 'material-ui/svg-icons/file/file-download';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
export default class IconMenuExample extends Component {
  state = {
    valueSingle: '1'
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });

    if(value === "1")
      browserHistory.push('/')
       if(value === "2")
      browserHistory.push('/coursesPage')
    if(value === "3")
       browserHistory.push('/about')
  };

  

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Home" />
           <MenuItem value="2" primaryText="Courses Page" />
          <MenuItem value="3" primaryText="About" />          
        </IconMenu>
      </div>
    );
  }
}

