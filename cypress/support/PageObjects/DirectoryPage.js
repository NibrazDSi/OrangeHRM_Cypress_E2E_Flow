import DirectoryPageObjects from "../Wiring/DirectoryPageObjects"

const directoryObject = new DirectoryPageObjects()
class Directory{
    enterEmployeeName(firstName){
        cy.get(directoryObject.getEmployeeSearchInputField()).type(firstName)
        cy.get(directoryObject.getSearchSuggestionField()).click()
        return this
    }
    clickOnSearchButton(){
        cy.get(directoryObject.getSearchButton())
        .click()
        return this
    }
    assertCardHolderContainsEmployeeName(fullName){
        cy.get(directoryObject.getCardHolder())
          .invoke('text')
          .then((text) => {
            const normalizedText = text.replace(/\s+/g, ' ').trim(); // Collapse multiple spaces into one and trim
            expect(normalizedText).to.eq(fullName);
          });

        return this
    }
}
export default Directory