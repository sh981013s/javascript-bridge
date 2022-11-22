const UserModel = require("../model/UserModel");

class UserController {
  constructor(mainController) {
    this.mainController = mainController;
    this.userModel = new UserModel();
  }

  /**
   * 유저의 시도 횟수 반환 연결 메서드
   * @return {number} [유저 시도 횟수]
   */
  getTryCount() {
    return this.userModel.getTryCount();
  }

  // 유저의 시도 횟수 증가 연결 메서드
  increaseTryCount() {
    this.userModel.increaseTryCount();
  }

  // 유저의 이동 기록을 초기화하는 연결 메서드
  resetUserMoving() {
    this.userModel.resetUserMoving();
  }

  /**
   * 유저의 이동 입력을 처리하는 메서드
   * @param userMovingInput {string} [유저 이동 입력]
   */
  onUserMovingInput(userMovingInput) {
    this.userModel.validateUserMoving(userMovingInput);
    this.userModel.appendUserMoving(userMovingInput);
    this.mainController.tryMove(this.userModel.getUserMoving());
  }
}

module.exports = UserController;
