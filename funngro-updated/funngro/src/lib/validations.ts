export interface ContactInput {
  name: string;
  email: string;
  topic: string;
  message: string;
  hp_field?: string; // honeypot — should remain empty
}

export interface ValidationSuccess {
  success: true;
  value: ContactInput;
}
export interface ValidationFailure {
  success: false;
  errors: Record<string, string>;
}
export type ValidationResult = ValidationSuccess | ValidationFailure;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ValidationResult {
  const name = String(input.name ?? "");
  const email = String(input.email ?? "");
  const topic = String(input.topic ?? "");
  const message = String(input.message ?? "");
  const hp_field = String(input.hp_field ?? "");

  const errors: Record<string, string> = {};

  if (!name.trim() || name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!topic) {
    errors.topic = "Please choose who you are.";
  }
  if (!message.trim() || message.trim().length < 10) {
    errors.message = "Please write a message of at least 10 characters.";
  }
  if (hp_field.trim() !== "") {
    errors.hp_field = "Spam detected.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const value: ContactInput = {
    name: name.trim(),
    email: email.trim(),
    topic: topic.trim(),
    message: message.trim(),
  };
  return { success: true, value };
}
