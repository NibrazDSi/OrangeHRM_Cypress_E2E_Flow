const searchEmployeeInput = "input[placeholder='Type for hints...']"
const searchSuggestion = ".oxd-autocomplete-option > span"
const searchButton = "button[type='submit']"
const cardHolder = ".orangehrm-directory-card-header"
class DirectoryPageObjects{
    getEmployeeSearchInputField(){
        return searchEmployeeInput
    }
    getSearchSuggestionField(){
        return searchSuggestion
    }
    getSearchButton(){
        return searchButton
    }
    getCardHolder(){
        return cardHolder
    }

}
export default DirectoryPageObjects