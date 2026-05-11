const usuarios = [
  {
    id: 1,
    nome: 'Maria Silva',
    email: 'usuario1@teste.com',
    senha: '123456',
    expirado: false
  },
  {
    id: 2,
    nome: 'João Santos',
    email: 'usuario2@teste.com',
    senha: '123456',
    expirado: false
  },
    {
    id: 3,
    nome: 'Ana Pereira Lima',
    email: 'usuario3@teste.com',
    senha: '123456',
    expirado: true
  }
];

export function realizarLogin(email, senha){

  for (let i = 0;i < usuarios.length; i++) {

       // if (usuarios[i].email == email) {
       if (usuarios[i].email == email) {

           if (usuarios[i].senha == senha) {
            
            if (usuarios[i].expirado == true) {
               return 'Renove suas credenciais.';

            }

            return 'Login realizado com sucesso!';
        }                   
            return 'Credenciais Incorreta!';
        }
    } 

    return 'E-mail não encontrado na lista';    
}


