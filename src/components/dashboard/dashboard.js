import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageHeader from '../common/page-header/page-header';
// import NotificationBar from '../common/notification-bar/notification-bar';
import UserCard from '../common/user-card/user-card';
import Card from '../common/card/card';
import DashboardSidebar from './sidebar/sidebar';
import './dashboard.css';
import {fetchScholarships} from '../../actions/scholarships';
import {connect} from 'react-redux';
import ScholarshipTable from './scholarships-table';
import RecommendedList from './recommended-list/recommended-list';
import ScholarshipsToolbar from './scholarships-toolbar/scholarships-toolbar';
import {getUser, getScholarships, getTop3Scholarships, getCategories, getSubcategories} from '../../utils/store-getters';
import Major from '../../assets/files/How to Choose a Major.pdf';
import ScholarshipScams from '../../assets/files/-How to Avoid Scholarship Scams.pdf';
import Scholarships from '../../assets/files/scholarships.jpg';
import StudentLoan from '../../assets/files/student-loan-infographic-pdf.pdf';
import Icon from '../../assets/images/icon.png';

const mockColleges = [
  {name: 'Texas A&M University', url: '#'},
  {name: 'University of Texas at Austin', url: '#'},
  {name: 'Texax Tech University', url: '#'},
  {name: 'Baylor University', url: '#'},
  {name: 'University of Houston', url: '#'},
  {name: 'Texas State University', url: '#'}
];

const mockOpportunities = [
  {name: 'Opportunity 1', url: '#'},
  {name: 'Opportunity 2', url: '#'},
  {name: 'Opportunity 3', url: '#'},
  {name: 'Opportunity 4', url: '#'},
  {name: 'Opportunity 5', url: '#'},
  {name: 'Opportunity 6', url: '#'}
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
      toolbarOptions: { }
    };
  }

  componentWillMount = () => {
    this.props.fetchScholarships();
  };

  getImageLink = (image, text) => {
    return (
      <a className="card-with-links__link" href={image} target="_blank">
        <img src={Icon} alt="icon"/>
        { text }
      </a>
    )
  };

  getDashboardLeftContent = () => {
    return (
      <div className="dashboard__left-content">
        <UserCard user={this.props.user}/>
        <div className="text-gray-title" style={ { margin: '10px 0' } }>
          Trending Content
        </div>
        <Card className='card-with-links card-with-links--with-icon'>
          { this.getImageLink(Major, 'How to Choose A Winning Major') }
          { this.getImageLink(ScholarshipScams, 'How to Avoid Scholarship Scams') }
          { this.getImageLink(StudentLoan, 'Everything About Student Loans') }
          { this.getImageLink(Scholarships, 'The Stats on US Scholarships') }
        </Card>
{/*        <div className="text-gray-title" style={ { margin: '10px 0' } }>
          Recommended Colleges
        </div>
        <RecommendedList data={mockColleges}/>
        <div className="text-gray-title" style={ { margin: '10px 0' } }>
          Recommended Student Opportunities
        </div>
        <RecommendedList data={mockOpportunities}/>*/}
      </div>
    );
  };

  toggleSidebar = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    });
  };

  requestData = (options) => {
    this.props.fetchScholarships(options);
  };

  addOptionToState = (property, value) => {
    const toolbarOptions = {
      ...this.state.toolbarOptions,
      [property]: value
    };

    if (property === 'category') {
      toolbarOptions.subcategory = undefined;
    }

    this.setState({ toolbarOptions });
    this.requestData(toolbarOptions);
  };

  handleCategoryChanged = (e, data) => {
    this.addOptionToState('category', data.value);
    console.log('selected category', data.value);
  };

  handleSubcategoryChanged = (e, data) => {
    this.addOptionToState('subcategory', data.value);
    console.log('selected subcategory', data);
  };

  handleSortChanged = (e, data) => {
    this.addOptionToState('order', data.value);
    console.log('selected subcategory', data.value);
  };

  render() {
    const contentClass = classNames('dashboard__overlay', { 'sidebar__displayed': this.state.sidebarVisible });

    return (
      <div className="dashboard-page">
        <PageHeader/>
        {/*    <NotificationBar/> */ }
        <DashboardSidebar onClick={ this.toggleSidebar } visible={ this.state.sidebarVisible }>
          { this.getDashboardLeftContent() }
        </DashboardSidebar>

        <div className="dashboard__content">
          <div className={ contentClass }></div>
          <div className="dashboard__content-inner">
            <div className="dashboard__left">
              { this.getDashboardLeftContent() }
            </div>
            <div className="dashboard__right">
              //<div className="top-3">
                //<div className="text-gray-title" style={ { marginBottom: 15 } }>
                  //YOUR TOP 3 SCHOLARSHIPS
                //</div>
                //<ScholarshipTable scholarships={ this.props.top3Scholarships }/>
              //</div>
              <div className="other-scholarships">
                <div className="text-gray-title" style={ { marginBottom: 15 } }>
                  OTHER SCHOLARSHIPS
                </div>
                <ScholarshipsToolbar onCategoryChanged={ this.handleCategoryChanged }
                                     selectedCategory={ this.state.toolbarOptions.category }
                                     onSubcategoryChanged={ this.handleSubcategoryChanged }
                                     onSortOptionChanged={ this.handleSortChanged }
                />
                <ScholarshipTable scholarships={ this.props.scholarships.slice(0, 50) }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  user: PropTypes.object,
  fetchScholarships: PropTypes.func,
  scholarships: PropTypes.array,
  top3Scholarships: PropTypes.array
};
const mapStateToProps = (state) => {
  return {
    scholarships: getScholarships(state),
    top3Scholarships: getTop3Scholarships(state),
    user: getUser(state),
    categories: getCategories(state),
    subcategories: getSubcategories(state)
  };
};
const mapDispatchToProps = { fetchScholarships };
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
