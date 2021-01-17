export class Env {
  isUnitTesting() {
    return process.env.JEST_WORKER_ID !== undefined;
  }
}