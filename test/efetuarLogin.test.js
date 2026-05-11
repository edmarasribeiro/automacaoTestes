import { realizarLogin } from '../src/login.js';
import assert from 'node:assert';

describe ('Testes para validação de login', function (){
    it('Validar login realizado com sucesso', function () {

        const resultado = realizarLogin('usuario1@teste.com', '123456');

        assert.equal(resultado, 'Login realizado com sucesso!');

    });

    it('Validar crendenciais expiradas', function () {

        const resultado = realizarLogin('usuario3@teste.com', '123456');

        assert.equal(resultado, 'Renove suas credenciais.');

    });

            it('Validar usuário não encontrado', function () {

        const resultado = realizarLogin('inexistente@teste.com', '1234567');
        assert.equal(resultado, 'E-mail não encontrado na lista');

    });

    it('Validar senha incorreta', function () {

        const resultado = realizarLogin('usuario2@teste.com', '1234567');

        assert.equal(resultado, 'Credenciais Incorreta!');

    });
    
});