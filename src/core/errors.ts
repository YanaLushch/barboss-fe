import { uniqueId } from "./utils/strings";

export interface ErrorConstructor {
  new (error: Error): UserErrors;
}
export class UserError extends Error {
  public id: string;
  public error: Error | null;

  constructor(error: Error | null = null) {
    super();
    this.id = uniqueId();
    this.error = error;
    Object.setPrototypeOf(this, UserError.prototype);
  }
}
export class ActionFailed extends UserError {
  public title: string;
  public description: string;

  constructor(title: string, description?: string, error: Error | null = null) {
    super(error);
    this.title = title;
    this.description = description || "";
    Object.setPrototypeOf(this, ActionFailed.prototype);
  }
}
export class ResourceNotFound extends UserError {
  constructor(originalError: Error | null = null) {
    super(originalError);
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
  }
}
export class UnauthorizedAccess extends UserError {
  constructor(originalError: Error | null = null) {
    super(originalError);
    Object.setPrototypeOf(this, UnauthorizedAccess.prototype);
  }
}
export class UnexpectedError extends UserError {
  constructor(originalError: Error | null = null) {
    super(originalError);
    Object.setPrototypeOf(this, UnexpectedError.prototype);
  }
}
export type UserErrors =
  | ActionFailed
  | ResourceNotFound
  | UnauthorizedAccess
  | UnexpectedError;
