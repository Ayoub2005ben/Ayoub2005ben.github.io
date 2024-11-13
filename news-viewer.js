class NewsViewer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    async loadArticles() {
      // For this example, replace this with your API endpoint or static data
      return [
        { title: "Noticia Falsa 1", author: "Autor 1", description: "Esta es la descripción de la noticia falsa número 1. La noticia continúa más allá de este punto, pero se corta." },
        { title: "Noticia Falsa 2", author: "Autor 2", description: "Aquí va la descripción de la segunda noticia falsa. Sigue describiendo los eventos inventados." }
      ];
    }
  
    async render() {
      const articles = await this.loadArticles();
      const template = document.getElementById('article-template');
      const container = document.createElement('div');
      
      articles.forEach(article => {
        const articleElement = document.importNode(template.content, true);
        
        articleElement.querySelector('.title').textContent = article.title;
        articleElement.querySelector('.author').textContent = article.author;
        articleElement.querySelector('.description').textContent = article.description;
        
        container.appendChild(articleElement);
      });
      
      this.appendChild(container);
    }
  }
  
  customElements.define('news-viewer', NewsViewer);
  