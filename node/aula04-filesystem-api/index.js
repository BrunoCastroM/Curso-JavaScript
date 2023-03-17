// Importando o filesystem (é uma API  que serve para trabalhar com arquivos e pastas do sistema)
const fs = require('fs').promises;
const path = require('path')

/*  Ler os arquivos da minha pasta para frente
fs.readdir('./')
    .then(files => console.log(files))
    .catch(e => console.log(e));
*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        // Condição para excluir da busca as pastas .git e node_modules:
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        // Verificando se é diretório
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        // Condição para somente buscar aquivos .html dentro da pasta:
        if (!/\.html$/g.test(fileFullPath)) continue;

        console.log(fileFullPath);
    }
}

readdir('C:/Programação/Cursos/Curso-JavaScript-Otavio-Miranda');