import EmployeePageObjects from "../Wiring/EmployeePageObjects"
import Directory from "./DirectoryPage"

const employeePageObject = new EmployeePageObjects()
class Employee{
    assertEmployeeNameIsVisible(fullName){
        cy.get(employeePageObject.getEmployeeHeader()).should('contain', fullName)
        return this
    }
    clickDirectoryPageFromSideNav(){
        cy.get(employeePageObject.getDirectoryLocator()).click()
        let directoryPage = new Directory()
        return directoryPage
    }

}
export default Employee