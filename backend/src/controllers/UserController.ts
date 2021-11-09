import { Request, Response } from "express";

const users = [
  { name: 'Lucas', email: 'lucassilva@vilaapps.com.br' },
];

export default {
  async index(req: Request, res: Response) {

    return res.json(users);
  }
};
