import { vi, afterEach } from 'vitest';



  global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });