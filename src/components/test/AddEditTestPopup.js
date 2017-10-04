import  React, {PropTypes} from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as testActions from '../../actions/testActions';
import  * as popupActions from '../../actions/popupActions';
import TestForm from './TestForm';
import toastr from 'toastr';

class AddEditTestPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true,
      errors: {},
      saving: false
    };

    this.saveTest = this.saveTest.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateTestState = this.updateTestState.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.props.actions.popupDidMount(Object.assign({}, this.props.test));
  }

  componentWillUnmount() {
    this.props.actions.popupWillUnmount();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.popupState.testId != nextProps.test.testId) {
      this.props.actions.popupDidMount(Object.assign({}, this.props.test));
    }
  }
  saveTest() {
    this.setState({saving: true});
    this.props.actions.saveTest(this.props.popupState)
      .then(() => this.close())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  close() {
    this.setState({saving: false});
    toastr.success('Test saved');
    this.closeModal();
  }

  closeModal()  {
    this.setState({
      isOpen: false
    }, () => {
      let {router} = this.context;
      if (router.goBack) {
        router.goBack();
      } else {
        router.push('/');
      }
    });
  }

  updateTestState(event) {
    const field = event.target.name;
    let test = Object.assign({}, this.props.popupState);
    test[field] = event.target.value;
    return  this.props.actions.popupChangeState(test);
  }

  render() {
    const title = this.props.popupState.testId
      ? 'Edit test record'
      : 'Add test record';
    const saveButtonText = this.state.saving
      ? 'Saving ...'
      : 'Save';

    return (
      <Modal isOpen={this.state.isOpen} onRequestHide={this.closeModal}>
        <ModalHeader>
          <ModalClose onClick={this.closeModal}/>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <TestForm test={this.props.popupState} onChange={this.updateTestState}/>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-default" onClick={this.closeModal}>
            Close
          </button>
          <button className="btn btn-primary"
                  onClick={this.saveTest}
                  disabled={this.state.saving}>
            {saveButtonText}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

AddEditTestPopup.contextTypes = {
  router: PropTypes.object
};

AddEditTestPopup.propTypes = {
  test: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getTestById(tests, id) {
  const test = tests.filter(test => test.testId == id);
  if (test) return test[0];
  return null;
}


function mapStateToProps(state, ownProps) {
  const testId = ownProps.params.id;

  let test = {testId: '', name: '', description: ''};

  if(testId && state.tests.length > 0) {
    test = getTestById(state.tests, testId);
  }

  return {
    test: test,
    popupState: state.popup
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Object.assign({}, testActions, popupActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditTestPopup);
