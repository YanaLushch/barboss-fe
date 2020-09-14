/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";

export const usePropsDebugger = (props: { [key: string]: any }): void => {
  const previousProps = useRef<any>();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj: any = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("[updated-field]", changesObj);
      }
    }

    previousProps.current = props;
  });
};
