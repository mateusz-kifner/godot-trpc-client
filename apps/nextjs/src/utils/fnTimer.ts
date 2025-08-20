export function fnTimer(message: string, fn: () => void) {
  const start = Date.now();
  const result = fn();
  const end = Date.now();
  console.log(message, ", [fnTimer]took:", end - start);
  return result;
}
export async function fnTimerAsync<T>(
  message: string,
  fn: () => Promise<T>,
): Promise<T> {
  const start = Date.now();

  // Run the function (could be sync or async)
  const result = await fn();

  const end = Date.now();
  console.log(`${message}, [fnTimer] took: ${end - start}ms`);

  return result;
}
