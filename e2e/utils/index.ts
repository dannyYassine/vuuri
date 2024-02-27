export function wait(time?: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time ?? 2000);
    });
  }