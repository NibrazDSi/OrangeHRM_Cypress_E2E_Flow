import AddEmployeePageObjects from "../Wiring/AddEmployeePageObjects"
import Employee from "./EmployeePage"

const addEmployeeObject = new AddEmployeePageObjects()
class AddEmployee{
    enterEmployeeFirstName(firstname){
        cy.get(addEmployeeObject.getFirstName()).type(firstname)
        return this
    }
    enterEmployeeLastName(lastName){
        cy.get(addEmployeeObject.getLastName()).type(lastName)
        return this
    }
    enterEmployeeUserName(username){
        cy.get(addEmployeeObject.getUsername()).parent().siblings('div').find('input')
        .type(username)
        return this
    }
    enterEmployeePassword(password){
        cy.get(addEmployeeObject.getPassword()).parent().siblings('div').find('input')
        .type(password)
        return this
    }
    enterEmployeeConfirmPassword(password){
        cy.get(addEmployeeObject.getConfirmPassword()).parent().siblings('div').find('input')
        .type(password)
        return this
    }
    clickOnToggleCheckbox(){
        cy.get(addEmployeeObject.getToggleCheckbox()).click()
        return this
    }
    clickOnSaveButton(){
        cy.get(addEmployeeObject.getSaveButton()).click()
        return this
    }
    assertSuccessMessage(){
        cy.get(addEmployeeObject.getSuccessMessage()).should("have.text", "Successfully Saved")
        let employee = new Employee()
        return employee
    }
    

}
export default AddEmployee