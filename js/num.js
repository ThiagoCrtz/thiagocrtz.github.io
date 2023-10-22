
while(true){    
    var nivelEscolhido = prompt("Escolha um nível entre 1, 2, 3 e 4\n1 = fácil\n2 = médio\n3 = intermediário\n4 = difícil\n\nCaso queira sair do jogo digite 5");
    var tentativas = 1;
    var tentativafacil = 5;
    var tentativamedio = 10;
    var tentativainter = 20;
    var tentativadiff = 30;
    var check = false;
        if (nivelEscolhido == 1){ 
            var number = Math.floor(Math.random() * 11);
            while (tentativas <= 5){

                var guess = prompt("Insira um número entre 0 e 10, você tem " + tentativafacil + " tentativa(s)");

                if(guess > 10){
                    alert("Digite um número entre 0 e 10")
                }
                if(guess < 0){
                    alert("Digite um número entre 0 e 10")
                }

                if (number == guess){
                    alert("Parabéns, você acertou  em " +tentativas+ " tentativas!");
                    check = true;
                    break;
                }
                else if (number > guess){
                    alert("É um número maior do que foi digitado");
                }
                else if (number < guess){
                    alert("É um número menor do que foi digitado");
                }

                tentativas++;
                tentativafacil--;
            }
            if (check == false){
                alert("GAME OVER");
            }
        }
        else if (nivelEscolhido == 2){
            var number = Math.floor(Math.random() * 31);
            while (tentativas <= 10){
                var guess = prompt("Insera um número entre 0 e 30, você tem " + tentativamedio + " tentativa(s)");
                if(guess > 30){
                    alert("Digite um número entre 0 e 30")
                }
                if(guess < 0){
                    alert("Digite um número entre 0 e 30")
                }
                
                if (number == guess){
                    alert("Parabéns, você acertou  em " +tentativas+ " tentativas!");
                    check = true;
                    break;
                }
                else if (number > guess){
                    alert("É um número maior do que foi digitado");
                }
                else if (number < guess){
                    alert("É um número menor do que foi digitado");
                }
                tentativas++;  
                tentativamedio--; 
            }
            if (check == false){
                alert("GAME OVER");
            }
        }

        else if (nivelEscolhido == 3){
            var number = Math.floor(Math.random() * 51);
            while (tentativas <= 20){
                var guess = prompt("Insere um número entre 0 e 50, você tem " + tentativainter + " tentativa(s)");
                if(guess > 50){
                    alert("Digite um número entre 0 e 50")
                }
                if(guess < 0){
                    alert("Digite um número entre 0 e 50")
                }
                
                if (number == guess){
                    alert("Parabéns, você acertou  em " +tentativas+ " tentativas!");
                    check = true;
                    break;
                }
                else if (number > guess){
                    alert("É um número maior do que foi digitado");
                }
                else if (number < guess){
                    alert("É um número menor do que foi digitado");
                }
                tentativas++;
                tentativainter--;
            }
            if (check == false){
                alert("GAME OVER");
            }
        }
        else if (nivelEscolhido == 4){
            var number = Math.floor(Math.random() * 100);
            while (tentativas <= 30){
                var guess = prompt("Insera um número entre 0 e 100, você tem " + tentativadiff + " tentativa(s)");
                if(guess > 100){
                    alert("Digite um número entre 0 e 100")
                }
                if(guess < 0){
                    alert("Digite um número entre 0 e 100")
                }
                
                if (number == guess){
                    alert("Parabéns, você acertou  em " +tentativas+ " tentativas!");
                    check = true;
                    break;
                }
                else if (number > guess){
                    alert("É um número maior do que foi digitado");
                }
                else if (number < guess){
                    alert("É um número menor do que foi digitado");
                }
                tentativas++;
                tentativadiff--;
            }
            if (check == false){
                alert("GAME OVER");
            }
        }
        else if( nivelEscolhido = 5 ){
            break;
        }

}