import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import PageEditor from './PageEditor';


function FieldEditor(props) {
  const { currentPanelIndex, currentEditingField } = props;

  return (
    <Row>
      <Col xs={12}>
        {
          currentEditingField === 'page' &&
          <PageEditor
            currentPanelIndex={currentPanelIndex}
          />
        }
      </Col>
    </Row>
  );
}

FieldEditor.propTypes = {
  currentEditingField: PropTypes.string.isRequired,
  currentPanelIndex: PropTypes.number.isRequired,
};

export default FieldEditor;