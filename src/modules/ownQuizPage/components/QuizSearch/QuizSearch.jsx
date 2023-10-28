import { useState } from "react";
import { BtnSearch, FiSearchS, FormWrapper, InputStyled } from "./QuizSearchStyled";
import { quizNames } from "../../../../shared/QuizesList/quizNames";

const QuizeSearch = ({filteredQuizeCards}) => {

  const newNames = quizNames.map((name) => name.quizCategory);
  // console.log('newNames: ', newNames);
  const [quizCollectionName, setQuizCollectionName] = useState("");
  // console.log("quizCollectionName: ", quizCollectionName);

  const handleFilterNames = (name) => {
    const filteredNames = newNames.filter((newName) =>
      newName.toLowerCase().includes(name)
    );
    filteredQuizeCards(filteredNames);
    // console.log("filteredNames: ", filteredNames);
    setQuizCollectionName(name);
  };



  const handleSearchBtnClick =()=>{
    console.log("handleSearchBtnClick");
  }
  return (
    <FormWrapper>
      <BtnSearch type="button" onClick={handleSearchBtnClick}>
        <FiSearchS />
      </BtnSearch>
      <InputStyled
        placeholder="Search"
        name="quizCollectionName"
        value={quizCollectionName}
        type="text"
        autoComplete="on"
        autoFocus
        onChange={(evt) => handleFilterNames(evt.target.value)}
      />
    </FormWrapper>
  );
};

export default QuizeSearch;
