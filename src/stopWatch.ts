export default (label: string) => {
  const start = performance.now()
  return () => {
    const end = performance.now()
    console.log(label, (end - start).toFixed(3))
  }
}
