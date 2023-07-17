<template>
  <div>
    <main>
      <section class="absolute w-full h-full">
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-gray-600 text-sm font-bold">
                      Bienvenido
                    </h6>
                  </div>
                  <hr class="mt-6 border-b-1 border-gray-400" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <small>Ingresa tus credenciales</small>
                  </div>
                  <form @submit.prevent="login">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="username">Username</label>
                      <input type="text" name="username" v-model="username" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="UserName" />
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="password">Password</label>
                      <input type="password" name="password" v-model="password" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" />
                    </div>
                    <div class="text-center mt-6">
                      <button type="submit" class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div v-if="errorMessage" class="text-center text-red-500 mt-3">
                    {{ errorMessage }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      this.errorMessage = ''; // Limpiar el mensaje de error antes de hacer la petición
      if (!this.username || !this.password) {
        this.errorMessage = 'Por favor, ingresa tu nombre de usuario y contraseña.';
        return;
      }

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
          username: this.username,
          password: this.id,

        });
        // Procesar la respuesta de la API en caso de éxito
        this.$router.push('/dashboard'); 
        console.log(response.data); // Aquí puedes mostrar un mensaje de éxito o redirigir al usuario
      } catch (error) {
        // Procesar el error de la API en caso de fallo
        this.errorMessage = 'Credenciales inválidas. Inténtalo nuevamente.';
        console.error(error);
      }
    },
  },
};
</script>
