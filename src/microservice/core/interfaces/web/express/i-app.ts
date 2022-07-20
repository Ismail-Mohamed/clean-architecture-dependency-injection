export interface IApplication {
  setup(): Promise<void> | void
}
