import { interfaces, id } from 'inversify'

export abstract class AbstractContainerModule
  implements interfaces.ContainerModule
{
  id = id()

  //non-null assertion - be sure to load before accessing
  isBound!: interfaces.IsBound
  bind!: interfaces.Bind
  unbind!: interfaces.Unbind
  rebind!: interfaces.Rebind

  registry: interfaces.ContainerModuleCallBack = (
    bind,
    unbind,
    isBound,
    rebind
  ) => {
    this.isBound = isBound
    this.bind = bind
    this.unbind = unbind
    this.rebind = rebind
  }
}
