import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Amanda',
      sobrenome: 'Linhares',
      email: 'amanda@gmail.com',
      idade: 31,
      peso: 51,
      altura: 1.54,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
