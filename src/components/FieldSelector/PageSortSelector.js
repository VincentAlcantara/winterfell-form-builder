import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import { changeOrder, changeCurrentEditingField } from '../../actions/winterfellFormBuilderActions';
import PageSelector from './PageSelector';

class PageSortSelector extends Component {
  static propTypes = {
    changeOrder: PropTypes.func.isRequired,
    changeCurrentEditingField: PropTypes.func.isRequired,
    formPanels: PropTypes.object.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.formPanels.map(formPanel => formPanel.get('panelId')),
    };

    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
    this.props.changeOrder(oldIndex, newIndex);
  };

  render() {
    const SortableItem = SortableElement(({ value }) =>
      <PageSelector
        panelHeader={value}
        onClick={() =>
          this.props.changeCurrentEditingField('page', this.props.currentQuestionSetIndex, this.props.currentQuestionIndex)}
      />);

    const SortableList = SortableContainer(({ items }) => (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
      ),
    );
    console.log('SortableList', SortableList);
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

function mapStateToProps(state) {
  return {
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
  };
}

export default connect(mapStateToProps,
  { changeOrder, changeCurrentEditingField })(PageSortSelector);

