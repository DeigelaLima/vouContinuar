<template>
    <div class="container">
        <div class="lendo">
           <h3>Tô Lendo</h3>
       </div>
        <div class="row centraliza">
        <div class=" col-7 card shadow rounded-3 main" >
            <div class="card-body p-4 p-sm-5">
            <h1 class="card-title text-center mb-5 fw-light fs-5">Login</h1>

            <form class="was-validated" @submit.prevent="login">
                <div class="form-floating mb-3 ">
                <input type="email" class="form-control " id="email" placeholder="name@example.com" required v-model="registro.email">
                <label for="femail">Email: </label>
                <div class="invalid-feedback">
                    Informe um email válido
                    </div>
                            </div>
                            <div class="form-floating mb-3 ">
                                <input type="password" class="form-control" id="password" placeholder="senha" minlength="6" required v-model="registro.password">
                                <label for="senha">Senha: </label>
                                <div class="invalid-feedback">
                                    A senha é obrigatória e deve conter no mínimo 6 caractéres
                                </div>
                            </div>


                            <div class="d-grid">
                                <button type="submit"  class="w-auto p-2 btn-primary" required>Entrar</button>
                                <div class="invalid-feedback">
                                    Preencha os campos anteriores
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </div>
</template>


<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

const registro = ref({});
const router = useRouter();

async function login(){
  console.log(registro.value.email);
  
   try {
      const response = await api.post("http://localhost:5173/api/auth/local", {
        identifier: registro.value.email,
        password: registro.value.password,
      });

      if(response.data) {
        router.push({path: "/"});
            return true;
      }

      return false;
    } catch (error) {
        alert("Dados incorrentos");
    }
}
</script>

<style>
    .container {
  height: 100vh;
}

.centraliza{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
  }

.main{
    width: 500px  ;
  }

.lendo{
    color:darkgreen;
}
</style>