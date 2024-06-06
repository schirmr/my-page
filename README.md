# ELECBRA - ELECTRONIC BRAIN

Destinado a publicação de conteúdos educacionais em Computação.
Acessibilidade é um diferencial.

Funcionalidades atuais:

- [x] Botão de Zoom + para ampliar os textos. Compatível com navegadores que suportem ES6+.
- [x] Botão de Zoom - para reduzir os textos. Compatível com navegadores que suportem ES6+.
- [x] Botão para navegar ao próximo capítulo. Em testes internos, não é suportado somente no Internet Explorer.
- [x] Botão para navegar ao capítulo anterior. Em testes internos, não é suportado somente no Internet Explorer.
- [x] Botão para imprimir o capítulo.
- [ ] Testar o botão de imprimir em várias plataformas.
- [x] Botão para gerar PDF do capítulo.
- [ ] Testar o .pdf em todas as plataformas
- [ ] PDF pode cortar algumas coisas na divisão de páginas. Observar isso.
- [x] Adicionar a data de última atualização do texto.
- [ ] Adicionar simulados para cada capítulo.
- [ ] Adicionar simulador para testar os comandos do capítulo.
- [x] Adicionar botão para modo de alto contraste (Dark).
- [x] Testar botão de alto contraste em vários contextos.
- [x] Quando a página está em modo dark, é necessário retornar ao modo light para gerar o PDF, caso contrário o PDF estará ilegível. Adicionar script ao pdf.js para corrigir isso.
- [ ] Adcionar botão para mudar o idioma do texto.
- [ ] Adicionar botão para modo daltônio, alterando o padrão de cores.
- [ ] Adicionar navegação por teclado.
- [x] Adicionar botão de áudio para reproduzir a leitura da página via leitor.
- [ ] Adicionar integração com o V-LIBRAS, se possível.
- [x] Adicionar integração para o navegador ler a página, pensei na SpeechSynthesis
- [x] Adicionar controles para aumentar velocidade
- [x] Adicionar controles para diminuir velocidade
- [x] Adicionar controles para pausar a fala
- [x] Botão de volume - 
- [ ] Botão de volume + (funcionando parcialmente, pois é necessário aumentar o volume do sistema)
- [ ] Testar funcionalidades de voz em outros navegadores.
- [ ] Ajustar responsividade do menu e dos textos.
- [x] Adicionar botão para gerar .pptx, pesquisei para ser .odt mas não achei uma biblioteca para isso. O slide gerado vai requerer ajustes do usuário, pois não fica perfeito, mas adianta boa parte do trabalho.
- [ ] Para que o slide receba cor, é necessário adidcionar um css inline, talvez dê para fazer algo desse tipo no pptx.js adicionando no elemento.
- [ ] Refazer o menu, pois no Safari é necessário "descer a página" para ele aparecer no celular.
- [ ] Quando copiar algo do texto, ir formatado com referência ABNT.
- [ ] Quando você está numa página de exercícios, ao clicar para voltar (script nav.js), é necessário voltar para o mesmo número que se está agora. (Exercício: ex2.html, ao voltar, você irá para 1.html, e não para 2.html).
- [ ] Adicionar meta description e meta author nas páginas.
- [ ] Gerar .doc das páginas.