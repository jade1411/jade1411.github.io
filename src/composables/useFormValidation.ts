import type { ValidationErrors, ContactFormData } from '@/types/form';

export function useFormValidation() {
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const re = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return re.test(phone);
  };

  const validateForm = (formData: ContactFormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Имя обязательно';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Имя должно быть не менее 2 символов';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email обязателен';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Некорректный email';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Некорректный телефон';
    }

    if (!formData.message.trim()) {
      errors.message = 'Сообщение обязательно';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Сообщение должно быть не менее 10 символов';
    } else if (formData.message.trim().length > 500) {
      errors.message = 'Сообщение должно быть не более 500 символов';
    }

    return errors;
  };

  return { validateForm };
}