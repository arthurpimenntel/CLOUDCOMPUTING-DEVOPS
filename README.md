# Projeto DevOps: Pipeline CI/CD com Deploy em Nuvem

Aplicação web simples (HTML, CSS e JavaScript) empacotada em um contêiner Docker, com pipeline de integração e entrega contínuas (CI/CD) usando GitHub Actions e deploy automático em uma instância AWS EC2.

## Tecnologias utilizadas

- HTML, CSS e JavaScript
- Docker e Docker Compose
- Nginx (servidor web dentro do contêiner)
- Git e GitHub
- GitHub Actions (CI/CD)
- Docker Hub (registro de imagens)
- AWS EC2 (nuvem)

## Arquitetura
Desenvolvedor --> GitHub --> GitHub Actions --> Docker Hub --> AWS EC2 --> Usuário
(push) (código) (teste, build, (imagem) (container) (navegador)
push, deploy)

## Como o pipeline funciona

Toda vez que há um push na branch `main`, o GitHub Actions executa 3 etapas:

1. **test**: constrói a imagem, sobe o contêiner e verifica com `curl` se o site responde.
2. **build-and-push**: constrói a imagem Docker e a publica no Docker Hub.
3. **deploy**: conecta por SSH na instância EC2, baixa a nova imagem e reinicia o contêiner.

Credenciais (usuário e token do Docker Hub, IP e chave SSH da EC2) ficam em **GitHub Secrets**, nunca no código.

## Como executar localmente

Pré-requisito: Docker instalado.

```bash
git clone https://github.com/SEU_USUARIO/meu-site-devops.git
cd meu-site-devops
docker compose up --build
```

Acesse http://localhost

## Estrutura do projeto
.
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── INTEGRANTES.md
├── README.md
└── .github/workflows/deploy.yml

## Integrantes e divisão de tarefas

Veja o arquivo [INTEGRANTES.md](INTEGRANTES.md).

## Segurança

- Nenhuma senha, token ou chave é versionada no repositório.
- O arquivo `.pem` está no `.gitignore`.
