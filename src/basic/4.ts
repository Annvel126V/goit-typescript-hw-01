// Функція приймає аргумент типу string і нічого не повертає (void)
function showMessage(message: string): void {
  console.log(message);
}
// Функція приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
// Функція не приймає аргументів і ніколи не повертає (never, тому що викликає помилку)
function customError(): never {
  throw new Error("Error");
}
