import requestFactory, {
  ApiCallFunction,
  RequestOptions,
} from "./requestFactory";
import httpErrorsMap from "./httpErrorsMap";
import { ErrorConstructor, UnexpectedError, ActionFailed } from "../errors";

const getHttpError = (code: keyof typeof httpErrorsMap): ErrorConstructor => {
  return code in httpErrorsMap ? httpErrorsMap[code] : httpErrorsMap.default;
};

const errorHandler = (fun: ApiCallFunction): ApiCallFunction => {
  return async <T>(url: string, options?: RequestOptions): Promise<T> => {
    try {
      return await fun<T>(url, options);
    } catch (err) {
      if (!!err?.method && !!err?.status) {
        if (err.method === "GET") {
          const CustomError = getHttpError(err.status);
          return Promise.reject(new CustomError(err));
        } else {
          return Promise.reject(
            new ActionFailed("Error occurred", "Please try again", err)
          );
        }
      }
      return Promise.reject(new UnexpectedError(err));
    }
  };
};

export const get = errorHandler(requestFactory("GET"));
export const post = errorHandler(requestFactory("POST"));
export const put = errorHandler(requestFactory("PUT"));
export const remove = errorHandler(requestFactory("DELETE"));
