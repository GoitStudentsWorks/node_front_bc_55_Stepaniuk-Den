//import { v4 as uuidv4 } from 'uuid';
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = ({quizzesArr, className}) => {
  // console.log('quizzesArrList: ', quizzesArr);  
  return (
    <>      
      <CardList className={className}>
        {/* <QuizListItem/>
        <QuizListItem/>
        <QuizListItem/> */}
        {quizzesArr.map(quiz=><li key={quiz._id}  className={className}><QuizListItem quiz={quiz}/></li>)}        
      </CardList>
    </>
  );
};

export default QuizesList;
