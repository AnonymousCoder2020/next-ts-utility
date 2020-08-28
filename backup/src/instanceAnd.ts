export default <A>(value: unknown, instances: { new (): A }[]): value is A => {
  return instances.every(instance => value instanceof instance)
}
