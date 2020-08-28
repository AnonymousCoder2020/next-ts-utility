export default <A>(value: unknown, instances: { new (): A }[]): value is A => {
  return instances.some(instance => value instanceof instance)
}
