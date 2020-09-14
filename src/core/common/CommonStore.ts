import { ReactElement } from "react";

import { action, observable } from "mobx";

import { UserError, UserErrors } from "../errors";
import { uniqueId } from "../utils/strings";

type ApiContext = { [key: string]: string };

export class CommonStore {
  @observable private _loadingPage = 0;
  @observable errors: UserErrors[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @observable toasts: any[] = [];

  private _apiContext: ApiContext = {};

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleError = (error: any): boolean => {
      if (error?.hasBeenCaught !== undefined) {
        return true;
      }
      if (error instanceof UserError) {
        this._pushError(error);
      } else {
        // TODO: make errors log
      }
      return false;
    };
    window.onerror = (...args: any[]): boolean => {
      return handleError(args[4]);
    };
    window.onunhandledrejection = (e: PromiseRejectionEvent): boolean => {
      return handleError(e.reason);
    };
  }

  // Api context

  getApiParam(name: string): string {
    return this._apiContext[name];
  }

  addApiParam(name: string, value: string): void {
    this._apiContext[name] = value;
  }

  // Loading page

  get isLoadingPage(): boolean {
    return !!this._loadingPage;
  }

  showLoadingPage(): void {
    this._loadingPage += 1;
  }

  hideLoadingPage(): void {
    this._loadingPage -= 1;
  }

  // Toasts

  pushToast(
    title: string,
    description: string | ReactElement = "",
    intent: "positive" | "negative"
  ): void {
    this.toasts.push({ title, description, id: uniqueId(), intent });
  }

  @action.bound
  clearToasts(): void {
    this.toasts = [];
  }

  // Errors

  private _pushError(error: UserError): void {
    this.errors.push(error);
  }

  @action.bound
  clearErrors(): void {
    this.errors = [];
  }
}

const store = new CommonStore();
export default store;
