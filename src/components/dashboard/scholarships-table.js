import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import './scholarships-table.css';
import moment from 'moment';

const MoreDetailsLink = ({ link, text }) => <a href={ link } target="_blank">{ text }</a>;
MoreDetailsLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

const getFormattedAmount = (amount, link) => {
  if (!amount) {
    return <MoreDetailsLink link={ link } text="View more details"/>;
  }
  return `$${amount}`;
};

const getFormattedDate = (date, link) => {
  if (!date) {
    return <MoreDetailsLink link={ link } text="View more details"/>;
  }
  return moment(date).format('MMM Do YYYY');
};

export default class ScholarshipTable extends React.Component {
  getRows = () => {
    return this.props.scholarships.map((s, i) => {
      return (
        <Table.Row key={ i }>
          <Table.Cell>{ s.category }</Table.Cell>
          <Table.Cell>{ s.subcategory }</Table.Cell>
          <Table.Cell>{ s.scholarship_name }</Table.Cell>
          <Table.Cell>{ getFormattedAmount(s.amount, s.link) }</Table.Cell>
          <Table.Cell>{ getFormattedDate(s.due_date, s.link) }</Table.Cell>
          <Table.Cell><MoreDetailsLink link={ s.link } text="Apply Now"/></Table.Cell>
        </Table.Row>
      );
    });
  };

  render () {
    return (
      <div className="scholarships-table-wrapper">
        <Table celled className="scholarships-table">
          <Table.Header>
            <Table.Row className="text-gray-title">
              <Table.HeaderCell>CATEGORY</Table.HeaderCell>
              <Table.HeaderCell>SUB CATEGORY</Table.HeaderCell>
              <Table.HeaderCell>SCHOLARSHIP NAME</Table.HeaderCell>
              <Table.HeaderCell>AMOUNT</Table.HeaderCell>
              <Table.HeaderCell>DUE DATE</Table.HeaderCell>
              <Table.HeaderCell>APPLICATION</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { this.getRows() }
          </Table.Body>
        </Table>
      </div>
    );
  };
}
ScholarshipTable.propTypes = {
  scholarships: PropTypes.array
};
