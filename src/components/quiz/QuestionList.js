import React, {Component} from 'react';
import Question from './Question';

class QuestionList extends Component{

  render() {
    return(
      <div className="questions">
        {
          this.props.questions.map(question => <Question question={question} key={question.id} {...this.props} />)
        }
      </div>
    )
  }
}

module.exports = QuestionList;
