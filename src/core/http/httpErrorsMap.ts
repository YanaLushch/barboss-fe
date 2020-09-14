import {
  UnauthorizedAccess,
  ResourceNotFound,
  UnexpectedError,
} from "../errors";

const httpErrorsMap = {
  401: UnauthorizedAccess,
  403: UnauthorizedAccess,
  404: ResourceNotFound,
  default: UnexpectedError,
};

export default httpErrorsMap;
