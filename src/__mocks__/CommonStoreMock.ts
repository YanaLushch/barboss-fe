/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonStore } from "../core/common/CommonStore";

class CommonStoreMock extends CommonStore {
  pushToast(): void {}
  clearToasts(): void {}
  clearErrors(): void {}
  showLoadingPage(): void {}
  hideLoadingPage(): void {}
}

const commonStoreMock = new CommonStoreMock();

commonStoreMock.pushToast = jest.fn();
commonStoreMock.clearToasts = jest.fn();
commonStoreMock.clearErrors = jest.fn();
commonStoreMock.showLoadingPage = jest.fn();
commonStoreMock.hideLoadingPage = jest.fn();

export default commonStoreMock;
