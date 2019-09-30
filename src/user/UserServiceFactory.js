import UserRepository from "../repository/UserRepository";
import UserService from "./UserService";

const userServiceProps = {
    userRepository: new UserRepository()
};
const userService = new UserService(userServiceProps);

function getUserServiceInstance() {
    return userService;
}

export default getUserServiceInstance;