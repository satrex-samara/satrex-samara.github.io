"use server";

export interface ContactState {
  success?: boolean;
  name?: string;
  errors?: Record<string, string>;
  values?: { name: string; contact: string; message: string };
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Укажите имя (минимум 2 символа)";
  if (contact.length < 5)
    errors.contact = "Укажите телефон или e-mail для связи";
  if (message.length < 10)
    errors.message = "Опишите задачу чуть подробнее (от 10 символов)";

  if (Object.keys(errors).length > 0) {
    return { errors, values: { name, contact, message } };
  }

  // MVP: заявка никуда не отправляется, только подтверждается на экране.
  // Подключите сюда отправку в CRM / e-mail / Telegram по готовности.
  return { success: true, name };
}
