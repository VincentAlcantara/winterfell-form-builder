
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, DropdownButton, MenuItem, FormGroup } from 'react-bootstrap';

function Pagination(props) {
  const { currentPanelId, formPanels, onClick } = props;
  const getPages = () => formPanels.map((panel, index) => (
    <MenuItem
      key={`${index}-${panel.panelId}`}
      onClick={() => {
        onClick(panel.panelId);
      }}
      className="btn-block"
    >
      {panel.panelId}
    </MenuItem>
  ));

  return (
    <Row>
      <Col xs={12}>
        <p>
          <FormGroup>
            <label htmlFor="pagination" style={{ display: 'block' }}>
              Page
            </label>
            <DropdownButton
              id="pagination"
              title={currentPanelId || 'Select Page'}
              className="btn-block"
            >
              { formPanels && getPages() }
            </DropdownButton>
          </FormGroup>
        </p>
      </Col>
    </Row>
  );
}

Pagination.propTypes = {
  formPanels: PropTypes.array.isRequired,
  currentPanelId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPanelId: 'Select Page',
};

export default Pagination;

