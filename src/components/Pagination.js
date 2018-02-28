
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import { goToPage } from '../actions/winterfellFormBuilderActions';

class Pagination extends Component {
  static propTypes = {
    goToPage: PropTypes.func.isRequired,
    schema: PropTypes.object.isRequired,
    currentPanelId: PropTypes.string.isRequired,
  }

  render() {
    const { schema, currentPanelId } = this.props;

    const getPages = () => {
      console.log('schema.formPanels: ', schema.formPanels);

      return schema.formPanels.map((panel, index) => (
        <MenuItem
          key={`${index}-${panel.panelId}`}
          onClick={() => {
            this.props.goToPage(panel.panelId);
          }}
        >
          {panel.panelId}
        </MenuItem>
      ));
    };

    return (
      <Row>
        <Col xs={12}>
          <DropdownButton
            id="pagination"
            title={currentPanelId}
          >
            { schema.formPanels && getPages() }
          </DropdownButton>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']).toJS(),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
  };
}
export default connect(mapStateToProps, { goToPage })(Pagination);

