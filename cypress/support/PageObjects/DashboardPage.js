import DashboardPageObjects from "../Wiring/DashboardPageObjects"
import PIMPage from "./PIMPage"

const dashboardPageObject = new DashboardPageObjects()
class Dashboard{
    assertDashboardHeaderIsVisible(){
        cy.get(dashboardPageObject.getDashboardHeader()).should('have.text','Dashboard')
        return this
    }
    clickOnPIMButton(){
        cy.get(dashboardPageObject.getPIMLocator()).click()
        let pimPage = new PIMPage()
        return pimPage
    }
    assertUsernameIsVisible(fullname){
        cy.get(dashboardPageObject.getUsernameLocator()).should("have.text", fullname)
    }
}
export default Dashboard