import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import PageEditor from './PageEditor';
import QuestionSetEditor from './QuestionSetEditor';
import QuestionEditor from './QuestionEditor';


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
          (currentEditingField === 'questionSet' || currentEditingField === 'question') &&
          <div>
            <QuestionSetEditor
              currentQuestionSetIndex={currentQuestionSetIndex}
            />
            <QuestionEditor
              currentQuestionSetIndex={currentQuestionSetIndex}
              currentQuestionIndex={currentQuestionIndex}
            />
          </div>
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
