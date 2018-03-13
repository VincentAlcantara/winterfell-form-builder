import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import PageEditor from './PageEditor';
import QuestionSetEditor from './QuestionSetEditor';


function FieldEditor(props) {
  const {
    currentEditingField,
    currentPanelIndex,
    currentQuestionSetIndex,
    currentQuestionIndex,
  } = props;

  return (
    <Row>
      <Col xs={12}>
        {
          currentEditingField === 'page' &&
          <PageEditor
            currentPanelIndex={currentPanelIndex}
          />
        }
        {
          currentEditingField === 'questionSet' &&
          <QuestionSetEditor
            currentQuestionSetIndex={currentQuestionSetIndex}
          />
        }
        {
          currentEditingField === 'question' &&
          <PageEditor
            currentQuestionSetIndex={currentQuestionSetIndex}
            currentQuestionIndex={currentQuestionIndex}
          />
        }
      </Col>
    </Row>
  );
}

FieldEditor.propTypes = {
  currentEditingField: PropTypes.string.isRequired,
  currentPanelIndex: PropTypes.number.isRequired,
  currentQuestionSetIndex: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
};

FieldEditor.defaultProps = {
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
};

export default FieldEditor;
