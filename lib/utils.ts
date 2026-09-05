export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function telDisplay(phone: string) {
  return phone;
}
