type ToInstances<L extends CommonClass[]> = {
  [P in Extract<keyof L, number>]: L[P]['prototype']
}[Extract<keyof L, number>]

type CommonClass = { new (): object; prototype: object }

export default <L extends CommonClass[]>(value: unknown, classes: L): value is ToInstances<L> => {
  return classes.every(cls => value instanceof cls)
}
