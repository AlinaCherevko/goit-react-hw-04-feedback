import React, { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalVotes = countTotalFeedback();
    return totalVotes > 0 ? Math.round((good / totalVotes) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  // const obj = Object.keys(this.state);
  // console.log(obj);

  return (
    <div className="container">
      <Section title="Leave your feedback">
        <Feedback
          leaveFeedback={leaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neuntal={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
};

// const { name, value } = e.currentTarget;
// const name = e.currentTarget.name;
// const value = e.currentTarget.value;

// handleChangeForm = e => {
//   const { name, value } = e.currentTarget;
//   this.setState({ [name]: value });
// };
