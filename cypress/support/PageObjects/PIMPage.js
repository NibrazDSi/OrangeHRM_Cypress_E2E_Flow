import PIMPageObjects from "../Wiring/PIMPagePageObjects"
import AddEmployee from "./AddEmployeePage"

const pimPageObjects = new PIMPageObjects()
class PIMPage{
    clickOnAddEmployeeButton(){
        cy.get(pimPageObjects.getAddEmployeeButton()).click()
        let addEmployeePage = new AddEmployee()
        return addEmployeePage
    }
}
export default PIMPage