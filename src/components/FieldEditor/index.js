import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import PageEditor from './PageEditor';
import QuestionSetEditor from './QuestionSetEditor';
import QuestionEditor from './QuestionEditor';
import ButtonBarEditor from './ButtonBarEditor';
import TreeView from '../TreeView';


function FieldEditor(props) {
  const {
    currentEditingField,
    currentQuestionPanelIndex,
    currentQuestionSetIndex,
    currentQuestionIndex,
  } = props;

  return (
    <Row>
      <Col xs={12}>
        <label htmlFor="tree-view">
          Navigation
        </label>
        <TreeView id="tree-view" />
        <br />
        {
          (currentEditingField === 'page' || currentEditingField === 'pageSort') &&
          <PageEditor
            currentQuestionPanelIndex={currentQuestionPanelIndex}
          />
        }
        {
          currentEditingField === 'questionSet' &&
          <QuestionSetEditor
            currentQuestionSetIndex={currentQuestionSetIndex}
          />
        }
        { currentEditingField === 'question' &&
          <QuestionEditor
            currentQuestionPanelIndex={currentQuestionPanelIndex}
            currentQuestionSetIndex={currentQuestionSetIndex}
            currentQuestionIndex={currentQuestionIndex}
          />
        }
        { currentEditingField === 'buttons' &&
          <ButtonBarEditor
            currentQuestionPanelIndex={currentQuestionPanelIndex}
          />
        }
      </Col>
    </Row>
  );
}

FieldEditor.propTypes = {
  currentEditingField: PropTypes.string.isRequired,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
  currentQuestionSetIndex: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
};

FieldEditor.defaultProps = {
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
};

export default FieldEditor;
