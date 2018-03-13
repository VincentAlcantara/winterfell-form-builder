
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';

function Pagination(props) {
  const { currentPanelId, formPanels, onClick } = props;
  const getPages = () => formPanels.map((panel, index) => (
    <MenuItem
      key={`${index}-${panel.panelId}`}
      onClick={() => {
        onClick(panel.panelId);
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
          title={currentPanelId || 'Select Page'}
        >
          { formPanels && getPages() }
        </DropdownButton>
      </Col>
    </Row>
  );
}

Pagination.propTypes = {
  formPanels: PropTypes.object.isRequired,
  currentPanelId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPanelId: 'Select Page',
};

export default Pagination;

