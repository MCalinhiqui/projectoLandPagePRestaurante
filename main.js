$(document).ready(function(){
    $('.telefone').mask('(+244) 000-000-000',{
        placeholder: '+244 999-999-999'
    });

    $('form').validate({
        rules:{
            nome:{
                required: true,
            },
            email:{
                required:true,
            },
            mensagem:{
                required:true
            }
        },
        messages:{
            nome:'Este campo é obrigatório',
            email:'Insira um e-mail válido',
            mensagem:'Por favor, digite a sua mensagem'
        }
    })
})