const configuredNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || "REPLACE_WITH_CONFIRMED_NUMBER";

export const WHATSAPP_NUMBER = configuredNumber.replace(/\D+/g, "");

export function normalizePhoneNumber(raw: string): string {
  const digits = raw.replace(/\D+/g, "");
  return digits.startsWith("0") ? digits : digits ? `0${digits}` : "";
}

export function isConfiguredWhatsAppNumber(value: string): boolean {
  return Boolean(value) && !/^REPLACE_WITH_CONFIRMED_NUMBER$/i.test(value);
}
