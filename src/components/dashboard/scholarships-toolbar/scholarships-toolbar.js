import React from 'react';
import { array, func, string } from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import './scholarships-toolbar.css';
import {connect} from 'react-redux';
import {getCategories, getSubcategories} from '../../../utils/store-getters';

const getText = (text) => text.replace(/_|-/g, ' ');

const getOptions = (data, property) => {
  return data.map(d => {
    const value = d[property];
    const text = getText(d[property]);
    return {
      value,
      text
    };
  });
};

class ScholarshipsToolbar extends React.Component {
  getSubcategoryDropdown = () => {
    const filteredSubcategories = this.props.subcategories.filter(x => x.category === this.props.selectedCategory);
    const subcategories = getOptions(filteredSubcategories, 'subcategory');

    return (
      <Dropdown placeholder='Select SubCategory'
                key={this.props.selectedCategory}
                selection
                disabled={ !this.props.selectedCategory }
                selectOnBlur={false}
                options={subcategories}
                defaultValue=""
                onChange={ this.props.onSubcategoryChanged }/>
    );
  };

  render() {
    const categories = getOptions(this.props.categories, 'category');

    const sortOptions = [
      { key: 'amount.asc', value: 'amount.asc.nullslast', text: 'Amount Ascending' },
      { key: 'amount.desc', value: 'amount.desc.nullslast', text: 'Amount Descending' },
      { key: 'due_date.asc', value: 'due_date.asc.nullsfirst', text: 'Due Date Ascending' },
      { key: 'due_date.desc', value: 'due_date.desc.nullslast', text: 'Due Date Descending' }
    ];
    return (
      <div className="scholarships-toolbar">
        <div className="filter-options">
          <div className="label">
            Filter Options:
          </div>
          <div className="options">
            <Dropdown placeholder='Select Category' selection selectOnBlur={false} options={categories} onChange={ this.props.onCategoryChanged }/>
            { this.getSubcategoryDropdown() }
          </div>
        </div>
        <div className="sort-options">
          <div className="label">
            Sort By:
          </div>
          <div className="options">
            <Dropdown placeholder='Sort by' selection selectOnBlur={false} options={sortOptions} onChange={ this.props.onSortOptionChanged }/>
          </div>
        </div>
      </div>
    );
  }
}

ScholarshipsToolbar.propTypes = {
  categories: array,
  subcategories: array,
  selectedCategory: string,
  onCategoryChanged: func,
  onSubcategoryChanged: func,
  onSortOptionChanged: func
};

const mapStateToProps = (state) => {
  return {
    categories: getCategories(state),
    subcategories: getSubcategories(state)
  };
};
export default connect(mapStateToProps)(ScholarshipsToolbar);
