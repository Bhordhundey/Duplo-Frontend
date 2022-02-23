
export const disableReactDevTools = (): void => {
  const noop = (): void => undefined;
  const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (process.env.NODE_ENV === 'production') {
    if (typeof DEV_TOOLS === 'object') {
      for (const [key, value] of Object.entries(DEV_TOOLS)) {
        DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
      }
    }
  }
};


export const enterHandler = (id?: string) => {
  window.addEventListener("keyup", (event) => {
    // 13 is the "Enter" key on the keyboard
    if (event.key === "Enter") {
      event.preventDefault();
      // Trigger the button element with a click
      const loginTrigger = document.querySelector(`#${id}`) as HTMLElement;
      if (loginTrigger && loginTrigger !== null) {
        loginTrigger?.click?.();
      }
    }
  });
};