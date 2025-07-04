import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {

  const cart = ref({
    items: [],
    total: 0,
  });

  function addBook(book) {
    const existBook = cart.value.items.find(item => item.id === book.id);

    if (existBook) {
      console.log("Este item ja está no carrinho!")
    }
    else
  }

  return {
    cart, addBook
  };
});

