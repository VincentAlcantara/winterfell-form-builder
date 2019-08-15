import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { movePage, changeCurrentEditingField } from '../../actions/winterfellFormBuilderActions';

class PageSortSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.formPanels.map(formPanel => formPanel.get('panelId')),
    };

    this.onSortEnd = this.onSortEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      items: nextProps.formPanels.map(formPanel => formPanel.get('panelId')),
    };
  }

  onSortEnd({ oldIndex, newIndex }) {
    if (oldIndex === newIndex) return;
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
    this.props.movePage(oldIndex, newIndex);
  }

  render() {
    const SortableItem = SortableElement(({ value }) =>
      (<div>
        <a
          href=""
          onClick={() =>
            this.props.changeCurrentEditingField('page')}
        >{value}
        </a>
      </div>));

    const SortableList = SortableContainer(({ items }) => (
      <div>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </div>
    ),
    );
    return [
      <label htmlFor="sortableList" key="sortPagesLabel">Pages - Drag and Drop to Sort</label>,
      <SortableList key="sortingPages" items={this.state.items} onSortEnd={this.onSortEnd} />,
    ];
  }
}

PageSortSelector.propTypes = {
  movePage: PropTypes.func.isRequired,
  changeCurrentEditingField: PropTypes.func.isRequired,
  formPanels: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
  };
}

export default connect(mapStateToProps,
  { movePage, changeCurrentEditingField })(PageSortSelector);

