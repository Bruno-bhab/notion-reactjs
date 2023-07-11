export const initialContent = `
<h1>Notion-React</h1>

<p>Esta é uma aplicação React criada com Vite, TypeScript e tailwind. A aplicação realiza uma cópia simples do Notion, utilizando o editor de texto HTML chamado Tiptap.</p>

<h2>Pré-requisitos</h2>

<p>Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:</p>

<ul>
    <li>Node.js</li>
    <li>npm (gerenciador de pacotes do Node.js)</li>
</ul>

<h2>Instalação</h2>

<p>Siga os passos abaixo para configurar o ambiente e executar a aplicação:</p>

<ol>
    <li>Clone este repositório em seu ambiente de desenvolvimento:</li>
    <pre><code>git clone git@github.com:Bruno-bhab/notion-reactjs.git</code></pre>
    <li>Navegue para o diretório do projeto:</li>
    <pre><code>cd notion-reactjs</code></pre>
    <li>Instale as dependências do projeto usando o npm:</li>
    <pre><code>npm install</code></pre>
</ol>

<h2>Uso</h2>

<p>Após a conclusão da instalação, você pode iniciar a aplicação usando o seguinte comando:</p>

<pre><code>npm run dev</code></pre>

<p>Isso iniciará a aplicação em modo de desenvolvimento. Abra seu navegador e acesse <a href="http://localhost:5173">http://localhost:5173</a> para visualizar a aplicação.</p>

<h2>Funcionalidades</h2>

<p>A aplicação possui as seguintes funcionalidades:</p>

<ul>
    <li>
        Edição de texto selecionando o mesmo e escolhendo uma opção no menu suspenso.
        <img src="https://github.com/Bruno-bhab/notion-reactjs/blob/main/public/github/gif1.gif?raw=true" alt="float menu">
    </li>
    
    <li>
        Formatação de linha usando o caractere '/'
        <img src="https://github.com/Bruno-bhab/notion-reactjs/blob/main/public/github/gif2.gif?raw=true" alt="side menu">
    </li>
</ul>

<h2>Exemplo de bloco de codigo em html</h2>

<pre><code class="language-html">&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Título da página&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Exemplo&lt;/h1&gt;
        &lt;p&gt;Este é um parágrafo de exemplo.&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2>Personalização</h2>

<p>Você pode personalizar a aplicação de acordo com suas necessidades. O código-fonte está estruturado de forma modular e pode ser facilmente adaptado.</p>

<p>O ponto de entrada principal da aplicação é o arquivo <code>src/index.tsx</code>, onde o componente raiz (<code>App</code>) é renderizado.</p>

<p>Os componentes principais estão localizados no diretório <code>src/components</code>. Você pode modificar esses componentes ou adicionar novos conforme necessário.</p>

<h2>Contribuição</h2>

<p>Se você deseja contribuir para este projeto, sinta-se à vontade para abrir problemas (issues) ou enviar pull requests com melhorias.</p>

<h2>Licença</h2>

<p>Este projeto está licenciado sob a <a href="https://chat.openai.com/c/LICENSE">MIT License</a>.</p>
`