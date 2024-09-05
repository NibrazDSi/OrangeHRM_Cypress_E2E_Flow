import TopNavPageObjects from "../Wiring/TopNavPageObjects"
import Login from "./LoginPage"

const topNavObject = new TopNavPageObjects()
class TopNav{
    logout(){
        cy.get(topNavObject.getUserImageLocator()).click()
        cy.get(topNavObject.getLogoutLocator()).click()
        let loginPage = new Login()
        return loginPage
    }

}
export default TopNav