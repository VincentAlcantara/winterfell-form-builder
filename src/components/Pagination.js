
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import { goToPage } from '../actions/winterfellFormBuilderActions';

function Pagination(props) {
  const { currentPanelId, formPanels } = props;

  const getPages = () => formPanels.map((panel, index) => (
    <MenuItem
      key={`${index}-${panel.panelId}`}
      onClick={() => {
        props.goToPage(panel.panelId);
      }}
    >
      {panel.panelId}
    </MenuItem>
  ));

  return (
    <Row>
      <Col xs={12}>
        <DropdownButton
          id="pagination"
          title={currentPanelId}
        >
          { formPanels && getPages() }
        </DropdownButton>
      </Col>
    </Row>
  );
}

function mapStateToProps(state) {
  return {
    formPanels: state.getIn(['form', 'schema', 'formPanels']).toJS(),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
  };
}

Pagination.propTypes = {
  formPanels: PropTypes.array.isRequired,
  currentPanelId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { goToPage })(Pagination);

