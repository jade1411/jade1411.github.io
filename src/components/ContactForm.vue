<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Имя *</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        :class="{ error: errors.name }"
        @blur="validateField('name')"
      >
      <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
    </div>
    
    <div class="form-group">
      <label for="email">Email *</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        :class="{ error: errors.email }"
        @blur="validateField('email')"
      >
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>
    
    <div class="form-group">
      <label for="phone">Телефон</label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        placeholder="+7 (XXX) XXX-XX-XX"
        :class="{ error: errors.phone }"
        @blur="validateField('phone')"
      >
      <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
    </div>
    
    <div class="form-group">
      <label for="message">Сообщение *</label>
      <textarea
        id="message"
        v-model="formData.message"
        rows="5"
        :class="{ error: errors.message }"
        @blur="validateField('message')"
      ></textarea>
      <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
    </div>
    
    <button type="submit" :disabled="isSubmitting" class="submit-btn">
      {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFormValidation } from '@/composables/useFormValidation';
import type { ContactFormData, ValidationErrors } from '@/types/form';

const { validateForm } = useFormValidation();

const formData = ref<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const errors = ref<ValidationErrors>({});
const isSubmitting = ref(false);

const validateField = (field: keyof ContactFormData) => {
  const fieldErrors = validateForm(formData.value);
  errors.value[field] = fieldErrors[field];
};

const handleSubmit = async () => {
  const formErrors = validateForm(formData.value);
  errors.value = formErrors;

  if (Object.keys(formErrors).length === 0) {
    isSubmitting.value = true;
    try {
      // Здесь будет отправка на сервер
      console.log('Данные формы:', formData.value);
      alert('Сообщение отправлено!');
      formData.value = { name: '', email: '', phone: '', message: '' };
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка отправки сообщения');
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>

<style scoped lang="scss">
.contact-form {
  max-width: 500px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ff6b00;
  }

  &.error {
    border-color: #ff0000;
  }
}

.error-message {
  color: #ff0000;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover:not(:disabled) {
    background: #e55a00;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
</style>