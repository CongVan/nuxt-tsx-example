interface IBaseFactory {
  resource: (id?: string) => string
}

export default class BaseRepository implements IBaseFactory {
  public resource() {
    return ''
  }
}
