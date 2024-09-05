const userImageLocator = "span img"
const logoutLocator = "li a:contains('Logout')"
class TopNavPageObjects{
    getUserImageLocator(){
        return userImageLocator
    }
    getLogoutLocator(){
        return logoutLocator
    }
}
export default TopNavPageObjects