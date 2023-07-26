# Criptografia e Descriptografia - Documentação do Projeto
Este é um projeto simples que implementa um programa de criptografia e descriptografia em HTML e JavaScript. O programa utiliza a técnica de separar os caracteres da mensagem em posições pares e ímpares para criar a mensagem criptografada e desfazer esse processo para a descriptografia.

## Funcionalidades
### O programa possui as seguintes funcionalidades: 

- Criptografar a Mensagem: O usuário pode inserir uma mensagem no campo de entrada de texto e clicar no botão "Criptografa" para obter a mensagem criptografada. A criptografia consiste em exibir todos os caracteres das posições pares seguidos dos caracteres das posições ímpares.

- Descriptografar a Mensagem: O usuário pode inserir a mensagem criptografada no campo de entrada de texto e clicar no botão "Descriptografa" para obter a mensagem original descriptografada. A descriptografia realiza o processo inverso da criptografia, separando os caracteres em posições pares e ímpares.

- Limpar Campos: O usuário pode clicar no botão "Limpar" para limpar os campos de entrada de texto, permitindo inserir novas mensagens para criptografar ou descriptografar.

## Como Usar
1. Insira a mensagem que deseja criptografar no campo de entrada de texto.
2. Clique no botão "Criptografa" para obter a mensagem criptografada no campo de texto de resultado.
3. Para descriptografar a mensagem criptografada, insira-a no campo de entrada de texto.
4. Clique no botão "Descriptografa" para obter a mensagem original descriptografada no campo de texto de resultado.
5. Para limpar os campos de entrada e resultado, clique no botão "Limpar".

## Estrutura do Projeto
### O projeto consiste em dois arquivos principais:

- **index.html** Este arquivo contém a estrutura da página web e os elementos HTML que permitem ao usuário interagir com o programa. Ele inclui um campo de entrada de texto para a mensagem original, botões para criptografar, descriptografar e limpar os campos, e um campo de texto para exibir o resultado.

- **logica.js:** Este arquivo contém a lógica de criptografia e descriptografia do programa. Ele define três funções: criptografa(), descriptografa(), e limpar(). As funções são responsáveis por executar a criptografia e descriptografia, além de limpar os campos de entrada e resultado.

## Funcionamento da Criptografia e Descriptografia
1. A criptografia é realizada pela função criptografa(), que percorre a mensagem inserida pelo usuário e separa os caracteres em duas strings: uma para os caracteres nas posições pares e outra para os caracteres nas posições ímpares. Em seguida, a função concatena as duas strings para formar a mensagem criptografada. Por fim, a mensagem criptografada é exibida no campo de texto de resultado.

2. A descriptografia é realizada pela função descriptografa(), que recebe a mensagem criptografada do usuário e realiza o processo inverso da criptografia. A função separa os caracteres em posições pares e ímpares e reconstrói a mensagem original concatenando os caracteres alternadamente. A mensagem original descriptografada é exibida no campo de texto de resultado.

## Estilo CSS
O projeto também inclui um arquivo de estilo CSS (style.css), que pode ser utilizado para aplicar estilos visuais à página web, como formatação de texto, posicionamento de elementos, cores, etc. No entanto, o estilo não foi detalhado aqui, pois o foco da documentação está na lógica do programa de criptografia e descriptografia. Caso deseje personalizar o estilo da página, é possível fazer ajustes no arquivo style.css.

## Imagem do Projeto:
![image](https://github.com/Maycondev01/Criptografia/assets/89277603/a65d4f14-0c45-4ab0-aee8-264b0ba73ba5)

## Autor: Maycon Douglas
## Referência: Lógica de Programação e Algorítmos com JavaScript
