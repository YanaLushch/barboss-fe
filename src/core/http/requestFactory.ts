export type RequestOptions = {
  body?: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  urlParams?: { [key: string]: any };
};

export type ApiCallFunction = <T>(
  url: string,
  options?: RequestOptions
) => Promise<T>;

const requestFactory = (
  method: "GET" | "POST" | "PUT" | "DELETE"
): ApiCallFunction => {
  return async <T>(url: string, options?: RequestOptions): Promise<T> => {
    const { body, urlParams } = options || {};
    const headers = new Headers();

    // add authentication headers
    headers.append("Accept", "application/json");

    // change case of body json
    const bodyString = JSON.stringify(body);

    // add json body headers
    if (body) {
      headers.append("Content-Type", "application/json");
      headers.append("Content-Length", bodyString.length.toString());
    }

    // add url params to the url
    if (urlParams) {
      const searchParams = new URLSearchParams();
      for (const key in urlParams) {
        searchParams.append(key, urlParams[key]);
      }
      url += `?${searchParams.toString()}`;
    }

    try {
      const res = await fetch(url, {
        method,
        headers,
        body: bodyString,
      });

      if (res.ok) {
        return await res.json() as T;
      }

      return Promise.reject({ method, status: res.status });
    } catch (e) {
      return Promise.reject(false);
    }
  };
};

export default requestFactory;
